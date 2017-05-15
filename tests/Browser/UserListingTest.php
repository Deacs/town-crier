<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\UserListingPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserListingTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * Test the basic table structure and standard user data is present
     *
     * @group admin
     * @group new
     *
     * @return void
     */
    public function testCorrectStandardUsersAreDisplayed()
    {
        $user = User::find(3);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->assertSeeIn('h3', 'All Users');
        });
    }

    // Test the current user is highlighted in the listing
    
    // Test the 'Add New User' option is displayed if the user has sufficient permisisons
}
