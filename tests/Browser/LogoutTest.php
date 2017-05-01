<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\HomePage;
use Tests\Browser\Pages\LoginPage;
use Tests\Browser\Pages\LoggedOutPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LogoutTest extends DuskTestCase
{
    use DatabaseMigrations;
//    use DatabaseTransactions;

    /**
     * Check a logged out user is presented with the correct view
     *
     * @group logout
     * @group authentication
     *
     * @return void
     */
    public function testLoggingOutPresentsCorrectView()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->clickLink('Logout')
                ->on(new LoggedOutPage)
                ->assertSeeIn('@logged-out-message', 'Y\'all come back soon, ya hear?!');
        });
    }

    /**
     * Check that the login option is present on the logout confirmation screen
     *
     * @group logout
     * @group authentication
     *
     * @return void
     */
    public function testLoginOptionIsAvailableAfterSuccessfulLogout()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit(new HomePage)
                ->click('@nav-cog')
                ->clickLink('Logout')
                ->on(new LoggedOutPage)
                ->assertSeeIn('@join-in-button', 'Join In!');
        });
    }

    /**
     * Ensure a logged in user is redirected to the home page if they are logged in
     *
     * @group authentication
     * @group logout
     *
     * @return void
     */
    public function testLoggedOutPageIsNotDirectlyCallableByLoggedInUser()
    {
        $user = (new LoginPage())->createTestUser();

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                ->visit('logged-out')
                ->on(new HomePage);
        });
    }

    /**
     * Ensure the logged-in route is only available as a result of a successful log out
     *
     * @group logout
     * @group authentication
     *
     * @return void
     */
    public function testLogoutPageNotDirectlyCallable()
    {
        $this->browse(function ($browser) {
            $browser->visit('logout')
                    ->on(new HomePage);
        });
    }
}
