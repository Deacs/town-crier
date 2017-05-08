<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
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

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit('/admin/user/add')
                ->assertSee('Add New User');
        });
    }
}
