<?php

namespace Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\AdminNewUserPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AddNewUserTest extends DuskTestCase
{
    use DatabaseMigrations;
    //use DatabaseTransactions;

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

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
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
     * @group failing
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
                ->press('Add User');
        });

        $this->assertDatabaseHas('users', [
            'first_name'    => $newUserAttributes['first_name'],
            'last_name'     => $newUserAttributes['last_name'],
            'email'         => $newUserAttributes['email'],
        ]);
    }
}
