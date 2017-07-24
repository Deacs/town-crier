<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\userEditPage;
use Tests\Browser\Pages\AuditLogPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class EditUserTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * Ensure a request to edit a non existent user returns the correct error message
     *
     * @group admin
     * @group user
     *
     * @return void
     */
    public function testRequestForUnknownUserReturnsCorrectMessage()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit('admin/user/2000/edit')
                ->assertSeeIn('h3.alert-danger', 'User Not Found');
        });
    }

    /**
     * Ensure the correct user details are shown when an edit has been requested
     *
     * @group admin
     * @group user
     * @group new
     *
     * @return void
     */
    public function testCorrectUserDetailsAreReturnedWhenEditRequested()
    {
        $user       = User::find(User::JANITOR_USER_ID);
        $edit_user  = User::find(5);

        $this->browse(function ($browser) use ($user, $edit_user) {
            $browser
                ->loginAs($user)
                ->visit('admin/user/'.$edit_user->id.'/edit')
                ->assertSeeIn('h3', 'Edit '.$edit_user->fullName().'\'s details')
                ->assertInputValue('first_name', $edit_user->first_name)
                ->assertInputValue('last_name', $edit_user->last_name)
                ->assertInputValue('email', $edit_user->email);
        });
    }
}
