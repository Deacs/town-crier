<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\HomePage;
use Tests\Browser\Pages\JanitorPage;
use Tests\Browser\Pages\AuditLogPage;
use Tests\Browser\Pages\StatsDashboardPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class JanitorNavigationLinksTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Check the Stats navigation links are available for the Janitor.
     *
     * @group janitor
     * @group navigation
     *
     * @return void
     */
    public function testStatsNavigationLinksIsPresent()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                    ->visit(new HomePage)
                    ->click('@nav-cog')
                    ->assertSee('Stats');
        });
    }

    /**
     * Check the Audit Log navigation links are available for the Janitor.
     *
     * @group janitor
     * @group navigation
     *
     * @return void
     */
    public function testJanitorNavigationLinksIsPresent()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->assertSee('Janitor');
        });
    }

    /**
     * Check the Audit Log navigation links are available for the Janitor.
     *
     * @group janitor
     * @group navigation
     *
     * @return void
     */
    public function testAuditLogNavigationLinksIsPresent()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->assertSee('Audit Log');
        });
    }

    /**
     * Check the Stats link in the main navigation opens the Stats page.
     *
     * @group janitor
     * @group navigation
     *
     * @return void
     */
    public function testStatsNavigationLinksOpensStatsPage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->clickLink('Stats')
                ->on(new StatsDashboardPage);
        });
    }

    /**
     * Check the Janitor link in the main navigation opens the Janitor page.
     *
     * @group janitor
     * @group navigation
     *
     * @return void
     */
    public function testJanitorNavigationLinksOpensJanitorPage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->clickLink('Janitor')
                ->on(new JanitorPage);
        });
    }

    /**
     * Check the Audit Log link in the main navigation opens the Audit Log page.
     *
     * @group janitor
     * @group navigation
     *
     * @return void
     */
    public function testAuditLogNavigationLinksOpensAuditLogPage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->clickLink('Audit Log')
                ->on(new AuditLogPage);
        });
    }
}
