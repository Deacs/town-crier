<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Tests\Browser\Pages\JanitorPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;


class JanitorTasksTest extends DuskTestCase
{
    /**
     * Ensure the Tasks heading is visible on the Janitor page
     *
     * @group janitor
     * @group admin
     *
     * @return void
     */
    public function testTaskHeadingVisible()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new JanitorPage)
                ->assertSee('Tasks');
        });
    }

    /**
     * Ensure the Add New User option is visible on the Janitor page
     *
     * @group janitor
     * @group admin
     *
     * @return void
     */
    public function testAddUserOptionIsVisible()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new JanitorPage)
                ->assertSeeIn('a#addnewuser', 'Add New User');
        });
    }

    /**
     * Ensure the Add New User option is visible on the Janitor page
     *
     * @group janitor
     * @group admin
     *
     * @return void
     */
    public function testListUsersOptionIsVisible()
    {
        $user = User::find(User::JANITOR_USER_ID);

        $this->browse(function ($browser) use ($user) {
            $browser
                ->loginAs($user)
                ->visit(new JanitorPage)
                ->assertSeeIn('a#listusers', 'List Users');
        });
    }
}
