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
     * Confirm that the correct welcome message is displayed after a successful login
     * @TODO this is a more generic test that will be relevant to all authorised users - move up a level
     * @return void
     */
    public function testWelcomeMessageDisplayedOnSuccessfulLogin()
    {
        $user = User::find(2);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                    ->visit('/')
                    ->assertSee('Welcome back, ' . $user->firstName);
        });
    }

    /**
     * Check the Stats navigation links are available for the Janitor.
     *
     * @return void
     */
    public function testStatsNavigationLinksIsPresent()
    {
        $user = User::find(2);

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
        $user = User::find(2);

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
        $user = User::find(2);

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
        $user = User::find(2);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Stats')
                ->assertPathIs('/stats');
        });
    }

    /**
     * Check the Janitor link in the main navigation opens the Stats page.
     *
     * @return void
     */
    public function testJanitorNavigationLinksOpensStatsPage()
    {
        $user = User::find(2);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Janitor')
                ->assertPathIs('/janitor');
        });
    }

    /**
     * Check the Audit Log link in the main navigation opens the Stats page.
     *
     * @return void
     */
    public function testAuditLogNavigationLinksOpensStatsPage()
    {
        $user = User::find(2);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Audit Log')
                ->assertPathIs('/audit-log');
        });
    }
}
