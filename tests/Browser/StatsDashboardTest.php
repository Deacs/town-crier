<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\JanitorPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\Browser\Pages\StatsDashboardPage;
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
                ->visit(new StatsDashboardPage);

            $currentCount = $statsDashboard->text('@total_announcements > b');
        });

        // Output a broadcast
        // For convenience, use a Janitor helper (code deploy system event)
        $this->browse(function ($janitorCupboard) use ($janitor) {
            $janitorCupboard->loginAs($janitor)
                ->visit(new JanitorPage)
                ->clickLink('Mock Code Deploy')
                ->waitForText('All done!');
        });

        $updatedCount = (int)$currentCount + 1;

        // Ensure the updated count is now being displayed
        $this->browse(function ($dashboard) use ($janitor, $updatedCount) {
            $dashboard->loginAs($janitor)
                ->visit(new StatsDashboardPage)
                ->assertSeeIn('@total_announcements > b', (string)$updatedCount);
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
                ->visit(new JanitorPage)
                ->clickLink('Mock Code Deploy')
                ->waitForText('All done!');
        });

        // Ensure the updated count is now being displayed
        $this->browse(function ($dashboard) use ($janitor) {
            $dashboard->loginAs($janitor)
                ->pause(1500)
                ->visit(new StatsDashboardPage)
                ->assertSeeIn('@last_announcement > b', 'seconds ago');
        });
    }

    /**
     * Ensure the last client refresh date is updated after the system event is fired
     * Application is using the Carbon date time library
     * A user friendly message should be displayed
     *
     * @group stats
     * @group valid
     * @group chore
     * @return void
     */
    public function testLastClientRefreshDateIsCorrectlyUpdatedAfterChoreFired()
    {
        $janitor = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($janitorCupboard) use ($janitor) {
            $janitorCupboard->loginAs($janitor)
                // Check we have the standard 'no record' message
                ->visit(new StatsDashboardPage)
                ->assertSeeIn('@last_client_refresh > b', 'No client refreshes recorded')
                // Go do your chores!
                ->visit(new JanitorPage)
                ->clickLink('Refresh Clients')
                // Wait for the modal and confirm that we want the command to be broadcast
                ->whenAvailable('div.sweet-alert', function ($modal) use ($janitor) {
                    $modal->waitForText('Are you sure?')
                            ->waitForText('All remote clients will be automatically refreshed')
                            ->press('Clean \'em up good!');
                })
                // Give the modal a chance to close
                ->pause(2500)
                // Check that the value has been updated
                ->visit(new StatsDashboardPage)
                ->assertSeeIn('@last_client_refresh > b', 'seconds ago');
        });
    }

    /**
     * Ensure the last database purge date is correctly updated after the system event is fired
     * Application is using the Carbon date time library
     * A user friendly message should be displayed
     *
     * @group stats
     * @group valid
     * @group chore
     * @group single
     *
     * @return void
     */
    public function testLastDatabasePurgeDateIsCorrectlyUpdatedAfterChoreFired()
    {
        $janitor = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($janitorCupboard) use ($janitor) {
            $janitorCupboard->loginAs($janitor)
                // Check we have the standard 'no record' message
                ->visit(new StatsDashboardPage)
                ->assertSeeIn('@last_purge > b', 'No database purges recorded')
                // Go do your chores!
                ->visit(new JanitorPage)
                ->clickLink('Purge DB')
                // Wait for the modal and confirm that we want the command to be broadcast
                ->whenAvailable('div.sweet-alert', function ($modal) use ($janitor) {
                    $modal->waitForText('Are you sure?')
                        ->waitForText('Persistent storage will be purged. This cannot be undone')
                        ->press('Flush \'em, cowboy!');
                })
                // Give the modal a chance to close
                ->pause(2500)
                // Check that the value has been updated
                ->visit(new StatsDashboardPage)
                ->assertSeeIn('@last_purge > b', 'seconds ago');
        });
    }

}
