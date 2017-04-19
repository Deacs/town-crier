<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class StatsDashboardTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Ensure announcement count is correctly incremented after a successful system event broadcast
     *
     * @group stats
     * @group valid
     * @return void
     */
    public function testAnnouncementCountIsCorrectlyIncrementedAfterSuccessfulSystemEventBroadcast()
    {
        $janitor = User::find(User::JANITOR_USER_ID);

        // Get the currently displayed announcements count
        $this->browse(function ($statsDashboard) use ($janitor, &$currentCount) {
            $statsDashboard->loginAs($janitor)
                ->visit('/stats');

            $currentCount = $statsDashboard->text('li#total_announcements > b');
        });

        // Output a broadcast
        // For convenience, use a Janitor helper (code deploy system event)
        $this->browse(function ($janitorCupboard) use ($janitor) {
            $janitorCupboard->loginAs($janitor)
                ->visit('/janitor')
                ->clickLink('Mock Code Deploy')
                ->waitForText('All done!');
        });

        $updatedCount = (int)$currentCount + 1;

        // Ensure the updated count is now being displayed
        $this->browse(function ($dashboard) use ($janitor, $updatedCount) {
            $dashboard->loginAs($janitor)
                ->visit('/stats')
                ->assertSeeIn('li#total_announcements > b', (string)$updatedCount);
        });
    }

    /**
     * Ensure the last announcement date is updated after a system event broadcast
     * Application is using the Carbon date time library
     * A user friendly message should be displayed
     *
     * @group stats
     * @group valid
     * @return void
     */
    public function testLastAnnouncementDateIsCorrectlyUpdatedAfterSuccessfulSystemEventBroadcast()
    {
        $janitor = User::find(User::JANITOR_USER_ID);

        // Output a broadcast
        // For convenience, use a Janitor helper (code deploy system event)
        $this->browse(function ($janitorCupboard) use ($janitor) {
            $janitorCupboard->loginAs($janitor)
                ->visit('/janitor')
                ->clickLink('Mock Code Deploy')
                ->waitForText('All done!');
        });

        // Ensure the updated count is now being displayed
        $this->browse(function ($dashboard) use ($janitor) {
            $dashboard->loginAs($janitor)
                ->visit('/stats')
                ->assertSeeIn('li#last_announcement > b', '1 second ago'); // This is flaky
        });
    }

    /**
     * Ensure the last client refresh date is updated after the system event is fired
     * Application is using the Carbon date time library
     * A user friendly message should be displayed
     *
     * @group stats
     * @group valid
     * @group single
     * @return void
     */
    public function testLastClientRefreshDateIsCorrectlyUpdatedAfterChoreFired()
    {
        $janitor = User::find(User::JANITOR_USER_ID);

        // Remotely refresh the clients
        $this->browse(function ($janitorCupboard) use ($janitor) {
            $janitorCupboard->loginAs($janitor)
                // Check we have the standard 'no record' message
                ->visit('/stats')
                ->assertSeeIn('li#last_client_refresh > b', 'No client refreshes recorded')
                // Go do your chores!
                ->visit('/janitor')
                ->clickLink('Refresh Clients')
                ->waitForText('Are you sure?')
                // Click the confirmation option
                ->press('Clean \'em up good!')
                // Wait for the modal to let us know the command has been broadcast
                // Check that the value has been updated
                ->pause(3000)
                ->visit('/stats')
                ->assertSeeIn('li#last_client_refresh > b', 'seconds ago');
        });
    }

}
