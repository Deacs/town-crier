<?php

namespace Tests\Browser\Pages;

use App\AnnouncementType;
use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;

class ShoutPage extends BasePage
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/shout';
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
            '@stream-item-title'    => 'input[name=title]',
            '@stream-item-body'     => 'textarea[name=body]',
            '@stream-item-type'     => 'select[name=type_id]',
        ];
    }

    // -- Page Methods

    /**
     * Create a shout
     *
     * @param  \Laravel\Dusk\Browser $browser
     * @param array $omissions
     *
     * @return void
     */
    public function createShout(Browser $browser, $omissions = [])
    {
        $browser->type('@stream-item-title', 'New Stream Item')
            ->type('@stream-item-body', 'Body of the stream item')
            ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
            ->press('Shout!');
    }
}
