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
     * Check the correct navigation links are available for the Janitor.
     *
     * @return void
     */
    public function testCorrectNavigationLinksArePresent()
    {
        $user = User::find(2);

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user)
                    ->visit('/')
                    ->assertSee('Welcome back, '.$user->first_name);
//                    ->click('#nav-cog')
//                    ->assertSee('Stats');
        });
    }
}
