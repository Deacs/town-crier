<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LogoutTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Check a logged out user is presented with the correct view
     *
     * @group logout
     * @return void
     */
    public function testLoggingOutPresentsCorrectView()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Logout')
                ->assertSee('Y\'all come back soon, ya hear?!')
                ->assertPathIs('/logged-out');
        });
    }

    /**
     * Check that the login option is present on the logout confirmation screen
     *
     * @group logout
     * @return void
     */
    public function testLoginOptionIsAvailableAfterSuccessfulLogout()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->click('#nav-cog')
                ->clickLink('Logout')
                ->assertSee('Join In!')
                ->assertPathIs('/logged-out');
        });
    }

    /**
     * Ensure the logged-in route is only available as a result of a successful log out
     *
     * @group logout
     * @return void
     */
    public function testLogoutPageNotDirectlyCallable()
    {
        // @TODO Add all the tests ;)
    }

    /**
     * Check that the relevant cookies have been deleted after logout
     *
     * @group cookies
     * @return void
     */
    public function testAuthenticationCookiesAreClearedAfterLogout()
    {
        // @TODO Add all the tests ;)
    }
}
