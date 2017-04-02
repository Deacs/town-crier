<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class JanitorNavigationLinksTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Check the Stats navigation links are available for the Janitor.
     *
     * @return void
     */
    public function testStatsNavigationLinksIsPresent()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                    ->visit('/')
                    ->click('#nav-cog')
                    ->assertSee('Stats');
        });
    }

    /**
     * Check the Audit Log navigation links are available for the Janitor.
     *
     * @return void
     */
    public function testJanitorNavigationLinksIsPresent()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->assertSee('Janitor');
        });
    }

    /**
     * Check the Audit Log navigation links are available for the Janitor.
     *
     * @return void
     */
    public function testAuditLogNavigationLinksIsPresent()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->assertSee('Audit Log');
        });
    }

    /**
     * Check the Stats link in the main navigation opens the Stats page.
     *
     * @return void
     */
    public function testStatsNavigationLinksOpensStatsPage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Stats')
                ->assertPathIs('/stats');
        });
    }

    /**
     * Check the Janitor link in the main navigation opens the Janitor page.
     *
     * @return void
     */
    public function testJanitorNavigationLinksOpensStatsPage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Janitor')
                ->assertPathIs('/janitor');
        });
    }

    /**
     * Check the Audit Log link in the main navigation opens the Audit Log page.
     *
     * @return void
     */
    public function testAuditLogNavigationLinksOpensAuditLogPage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Audit Log')
                ->assertPathIs('/audit-log');
        });
    }
}
