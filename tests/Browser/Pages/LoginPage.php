<?php

namespace Tests\Browser\Pages;

use App\User;
use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;

class LoginPage extends BasePage
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/login';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param Browser $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->assertPathIs($this->url());
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@login-email'    => 'input[name=email]',
            '@login-password' => 'input[name=password]',
        ];
    }

    // -- Page methods

    /**
     * Create and return the test user
     */
    public function createTestUser()
    {
        $user = factory(User::class)->create([
            'email'         => 'jackie.chan@' . env('DOMAIN'),
            'first_name'    => 'Jackie',
            'last_name'     => 'Chan',
            'password'      => bcrypt('secret')
        ]);

        return $user;
    }
}
