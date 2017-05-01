<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Tests\Browser\Pages\ShoutPage;
use Tests\Browser\Pages\LoginPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AnnouncementTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Ensure a guest user is redirected to login when attempting to add a stream item
     *
     * @group invalid
     * @group shout
     * @group authentication
     *
     * @return void
     */
    public function testGuestUserRedirectedToLoginWhenAttemptingToAddStreamItem()
    {
        $this->browse(function ($browser) {
            $browser->visit('shout')
                    ->on(new LoginPage);
        });
    }
}
