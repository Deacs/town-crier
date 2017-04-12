<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class InvalidAnnouncementTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * Title value has not been entered
     *
     * @group stream
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForAnnouncementMissingTitle()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit('/shout')
                ->assertSee('Shout!')
                ->type('body', 'Body of the stream item')
                ->select('type_id', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again');
        });
    }

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * Body value has not been entered
     *
     * @group stream
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForAnnouncementMissingBody()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit('/shout')
                ->assertSee('Shout!')
                ->type('title', 'New Stream Item')
                ->select('type_id', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again')
                ->pause(3000);
        });
    }

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * Announcement type has not been selected from the drop down
     *
     * @group single
     * @group stream
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForAnnouncementWithoutSelectedType()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit('/shout')
                ->assertSee('Shout!')
                ->type('title', 'New Stream Item')
                ->type('body', 'Body of the stream item')
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again')
                ->pause(3000);
        });
    }
}
