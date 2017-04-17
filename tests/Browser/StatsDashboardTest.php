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
     * @group single
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
}
