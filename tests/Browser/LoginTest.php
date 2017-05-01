<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Chrome;
use Tests\Browser\Pages\HomePage;
use Tests\Browser\Pages\LoginPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;
//    use DatabaseTransactions;

    /**
     * Ensure login with incorrect credentials does not direct to home page
     *
     * @group login
     * @group authentication
     *
     * @return void
     */
    public function testFailedLoginDisplaysCorrectMessageAndDoesNotDirectToHomePage()
    {
        $user = (new LoginPage())->createTestUser();

        $this->browse(function ($browser) use ($user) {
            $browser->visit(new LoginPage)
                ->type('@login-email', $user->email)
                ->type('@login-password', 'incorrect-secret')
                ->press('Login')
                // Errors on validation should be shown
                ->assertSeeIn('.help-block', 'These credentials do not match our records.')
                // Page should be /login
                ->on(new LoginPage)
                // Visiting home page should show anonymous user message
                ->visit(new HomePage)
                ->assertSeeIn('@welcome-message', 'Well, howdy stranger!');
        });
    }

    /**
     * Test a user can login and receive the correct welcome message.
     *
     * @group login
     * @group authentication
     *
     * @return void
     */
    public function testSuccessfulLoginReceivesCorrectWelcomeMessage()
    {
        $user = (new LoginPage())->createTestUser();

        $this->browse(function ($browser) use ($user) {
            $browser->visit(new LoginPage)
                ->type('@login-email', $user->email)
                ->type('@login-password', 'secret')
                ->press('Login')
                ->visit(new HomePage)
                ->assertSeeIn('@welcome-message', 'Welcome back, '.$user->first_name);
        });
    }

}
