<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ValidAnnouncementTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Ensure a standard announcement is received and correctly displayed in the stream.
     *
     * @group stream
     * @return void
     */
    public function testStandardAnnouncementIsCorrectlyDisplayedInStream()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast, $stream) use ($user) {
            $broadcast->loginAs($user)
                ->visit('/shout')
                ->assertSee('Shout!')
                ->type('title', 'New Stream Item')
                ->type('body', 'Body of the stream item')
                ->select('type_id', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!');

            $stream->loginAs(User::find(4))
                ->visit('/stream')
                ->waitForText('New Stream Item')
                ->assertSee('Body of the stream item')
                ->assertSeeIn('div.author', $user->fullName());
        });
    }

    /**
     * Ensure the correct information and messaging is displayed in the modal
     *
     * @group stream
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForValidAnnouncement()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit('/shout')
                ->assertSee('Shout!')
                ->type('title', 'New Stream Item')
                ->type('body', 'Body of the stream item')
                ->select('type_id', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->waitForText('Shout Heard!')
                ->assertSee('Your Shout has been added to the burble');
        });
    }
}
