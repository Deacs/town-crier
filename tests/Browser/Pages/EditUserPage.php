<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;

class EditUserPage extends BasePage
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/admin/user/edit';
    }

    /**
     * Assert that the browser is on the page.
     *
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
            '@first-name-label'         => 'label[for=first_name]',
            '@last-name-label'          => 'label[for=last_name]',
            '@email-label'              => 'label[for=email]',
            '@update-user-email'        => 'input[name=email]',
            '@update-user-firstname'    => 'input[name=first_name]',
            '@update-user-lastname'     => 'input[name=last_name]',
            '@update-user-btn'          => 'button#update-user',
        ];
    }
}
