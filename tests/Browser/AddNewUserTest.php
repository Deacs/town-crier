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
    use DatabaseTransactions;

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

        $newUserAttributes = [
            'first_name' => ''
        ];

        $this->browse(function ($browser) use ($user, $newUserAttributes) {
            $browser
                ->loginAs($user)
                ->visit(new AdminNewUserPage)
                ->assertSee('Add New User')
                ->assertSeeIn('@first-name-label', 'First Name')
                ->assertSeeIn('@last-name-label', 'Last Name');
        });
    }
}
