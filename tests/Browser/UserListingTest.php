<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\UserEditPage;
use Tests\Browser\Pages\AuditLogPage;
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

    /**
     * Ensure current user's entry in user listing is highlighted
     *
     * @group admin
     */
    public function testCurrentUserIsHighlightedInListing() 
    {
        $user = User::find(3);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->assertSeeIn('tr.success', $user->fullName());
        });
    }

    /**
     * Ensure the edit icon is displayed for each user
     *
     * @group admin
     */
    public function testEditIconIsDisplayedForEachUserListing()
    {
        $user = User::find(3);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->assertVisible('span.glyphicon-edit#edit_user_1')
                ->assertVisible('span.glyphicon-edit#edit_user_2')
                ->assertVisible('span.glyphicon-edit#edit_user_3');
        });
    }

    /**
     * Ensure the delete icon is displayed for each user
     *
     * @group admin
     */
    public function testDeleteIconIsDisplayedForEachUserListing()
    {
        $user = User::find(2);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->assertVisible('span.glyphicon-trash#delete_user_1')
                ->assertVisible('span.glyphicon-trash#delete_user_3')
                ->assertVisible('span.glyphicon-trash#delete_user_4');
        });
    }

    /**
     * Ensure the delete icon IS NOT displayed for the current user
     *
     * @group admin
     */
    public function testDeleteIconIsNotDisplayedForCurrentActiveUser()
    {
        $user = User::find(2);

        $this->browse(function($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->assertMissing('span.glyphicon-trash#delete_user_'.$user->id);
        });
    }

    /**
     * Ensure the 'edit user' link opens the correct screen
     * 
     * @group admin
     */
    public function testEditUserLinkOpensCorrectScreen()
    {
        $user = User::find(2);

        $this->browse(function($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->click('.glyphicon-edit#edit_user_'.$user->id)
                ->assertPathIs('/admin/user/'.$user->id.'/edit');
        });
    }

    /**
     * Ensure the 'delete user' link opens a confirmation modal
     *
     * @group admin
     * @group old
     * 
     */
    public function testDeleteUserOptionOpensCorrectConfirmationModal()
    {
        
        $user       = User::find(User::JANITOR_USER_ID);
        $remove     = User::find(4);

        $this->browse(function($browser) use ($user, $remove) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->click('.glyphicon#delete_user_'.$remove->id)
                // Wait for the modal and confirm that we wish to delete the user
                ->whenAvailable('div.sweet-alert', function ($modal) {
                    $modal
                        ->waitForText('Are you sure?')
                        ->waitForText('User will cease to be');
                });
        });
    }

    /**
     * Ensure the 'delete user' option displays the correct notification
     *
     * @group admin
     * @group new
     */
    public function testDeleteUserOptionDisplaysCorrectNotiifcation()
    {
        $user   = User::find(User::JANITOR_USER_ID);
        $remove = User::find(4);

        $this->browse(function($browser) use ($user, $remove) {
            $browser
                ->loginAs($user)
                ->visit(new UserListingPage)
                ->click('.glyphicon#delete_user_'.$remove->id)
                ->whenAvailable('div.sweet-alert', function ($modal) {
                    $modal
                        ->waitForText('Are you sure?')
                        ->pause(1000)
                        ->press('Yep, they gone!')
                        ->waitForText('Deleted!')
                        ->assertSee('Sayonara, cowboy!');
                });
        });
    }








    
    // Test the 'Add New User' option is displayed if the user has sufficient permisisons
}
