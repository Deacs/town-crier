<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthenticatedUserNavigationLinksTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
//        $this->browse(function ($browser) {
//            $browser->visit('/')
//                    ->assertSee('Laravel');
//        });
    }
}
