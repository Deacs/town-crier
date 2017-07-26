<?php

namespace Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\UserListingPage;
use Tests\Browser\Pages\AdminNewUserPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AddNewUserTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * Ensure the Add New User screen displays the correct fields
     * 
     * @group admin
     *
     * @return void
     */
    public function testAddNewUserScreenDisplaysCorrectForm()
    {
        $user = User::find(3);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->assertSee('Add New User')
                ->assertSeeIn('@first-name-label', 'First Name')
                ->assertSeeIn('@last-name-label', 'Last Name')
                ->assertSeeIn('@email-label', 'email Address')
                ->assertSee('Add User');
        });
    }

    /**
     * Ensure the form allows a new user to be added
     *
     * @group admin
     *
     * @return void
     */
    public function testNewUserIsAddedThroughForm()
    {
        $user = User::find(3);

        $newUserAttributes = [
            'first_name'    => 'Bob',
            'last_name'     => 'Jackson',
            'email'         => 'bob@jackson.com'
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->type('@new-user-firstname', $newUserAttributes['first_name'])
                ->type('@new-user-lastname', $newUserAttributes['last_name'])
                ->type('@new-user-email', $newUserAttributes['email'])
                ->press('Add User')
                ->pause(2000);
        });

        $this->assertDatabaseHas('users', [
            'first_name'    => $newUserAttributes['first_name'],
            'last_name'     => $newUserAttributes['last_name'],
            'email'         => $newUserAttributes['email'],
        ]);
    }

    /**
     * Ensure correct success notification displayed after successful addition of a new user
     *
     * @group admin
     * 
     * @return void
     */
    public function testCorrectSuccessfulNotificationMessageAfterAdditionOfNewUser()
    {
        $user = User::find(3);

        $newUserAttributes = [
            'first_name'    => 'Bob',
            'last_name'     => 'Jackson',
            'email'         => 'bob@jackson.com'
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->type('@new-user-firstname', $newUserAttributes['first_name'])
                ->type('@new-user-lastname', $newUserAttributes['last_name'])
                ->type('@new-user-email', $newUserAttributes['email'])
                ->press('Add User')
                ->pause(2000)
                ->assertSee('User Added')
                ->assertSee('The user has been added to the crowd')
                ->on(new AdminNewUserPage);
        });
    }

    /**
     * Ensure correct failure notification displayed after addition of a new user fails due to missing first name
     *
     * @group admin
     * 
     * @return void
     */
    public function testCorrectFailureNotificationMessageAfterAdditionOfNewUserFailsDueToMissingFirstName()
    {
        $user = User::find(3);

        $newUserAttributes = [
            'first_name'    => '',
            'last_name'     => 'Jackson',
            'email'         => 'bob@jackson.com'
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->type('@new-user-firstname', $newUserAttributes['first_name'])
                ->type('@new-user-lastname', $newUserAttributes['last_name'])
                ->type('@new-user-email', $newUserAttributes['email'])
                ->press('Add User')
                ->pause(2000)
                ->assertSee('Uh Oh')
                ->assertSee('Looks like you\'ve forgotten something. Try again?')
                ->on(new AdminNewUserPage);
        });
    }

    /**
     * Ensure correct failure notification displayed after addition of a new user fails due to missing last name
     *
     * @group admin
     * 
     * @return void
     */
    public function testCorrectFailureNotificationMessageAfterAdditionOfNewUserFailsDueToMissingLastName()
    {
        $user = User::find(3);

        $newUserAttributes = [
            'first_name'    => 'Bob',
            'last_name'     => '',
            'email'         => 'bob@jackson.com'
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->type('@new-user-firstname', $newUserAttributes['first_name'])
                ->type('@new-user-lastname', $newUserAttributes['last_name'])
                ->type('@new-user-email', $newUserAttributes['email'])
                ->press('Add User')
                ->pause(2000)
                ->assertSee('Uh Oh')
                ->assertSee('Looks like you\'ve forgotten something. Try again?')
                ->on(new AdminNewUserPage);
        });
    }

    /**
     * Ensure correct failure notification displayed after addition of a new user fails due to missing email address
     *
     * @group admin
     * @group failing
     * 
     * @return void
     */
    public function testCorrectFailureNotificationMessageAfterAdditionOfNewUserFailsDueToMissingEmail()
    {
        $user = User::find(3);

        $newUserAttributes = [
            'first_name'    => 'Bob',
            'last_name'     => 'Jackson',
            'email'         => ''
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->type('@new-user-firstname', $newUserAttributes['first_name'])
                ->type('@new-user-lastname', $newUserAttributes['last_name'])
                ->type('@new-user-email', $newUserAttributes['email'])
                ->press('Add User')
                ->pause(2000)
                ->assertSee('Uh Oh')
                ->assertSee('The email field is required')
                ->on(new AdminNewUserPage);
        });
    }

    /**
     * Ensure correct failure notification displayed after addition of a new user fails due to non unique email address
     *
     * @group admin
     * 
     * @return void
     */
    public function testCorrectFailureNotificationMessageAfterAdditionOfNewUserFailsDueToNoUniqueEmail()
    {
        $user = User::find(3);

        $newUserAttributes = [
            'first_name'    => 'Bob',
            'last_name'     => 'Jackson',
            'email'         => $user->email
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->type('@new-user-firstname', $newUserAttributes['first_name'])
                ->type('@new-user-lastname', $newUserAttributes['last_name'])
                ->type('@new-user-email', $newUserAttributes['email'])
                ->press('Add User')
                ->pause(2000)
                ->assertSee('Uh Oh')
                ->assertSee('The email address must be unique')
                ->on(new AdminNewUserPage);
        });
    }


}
