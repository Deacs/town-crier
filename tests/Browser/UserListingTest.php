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
     * Test the basic user listing page is returned
     *
     * @group admin
     *
     * @return void
     */
    public function testCorrectUserListingPageIsDisplayed()
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
    // 
    // Login as X
    // Open listing page
    // Row containing current user should be highlihted with X
    /**
     * Ensure current user's entry in user listing is highlighted
     *
     * @group admin
     * @group new
     */
    public function testCurrentUserIsHighlightedInListing() 
    {
        $user = User::find(3);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->assertSeeIn('tr.current_user', $user->fullName());
        });
    }
    
    // Test the 'Add New User' option is displayed if the user has sufficient permisisons
}
