<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use App\AnnouncementType;
use Tests\Browser\Pages\ShoutPage;
use Tests\Browser\Pages\StreamPage;
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
     * @group announcement
     * @group valid
     * @group single
     *
     * @return void
     */
    public function testStandardAnnouncementIsCorrectlyDisplayedInStream()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast, $stream) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->createShout();
//                ->type('@stream-item-title', 'New Stream Item')
//                ->type('@stream-item-body', 'Body of the stream item')
//                ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
//                ->press('Shout!');

            $stream->loginAs(User::find(4))
                ->visit(new StreamPage)
                ->waitForText('New Stream Item')
                ->assertSeeIn('@stream-body', 'Body of the stream item')
                ->assertSeeIn('@author', $user->fullName());
        });
    }

    /**
     * Ensure the correct information and messaging is displayed in the modal
     *
     * @group stream
     * @group announcement
     * @group valid
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForValidAnnouncement()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-title', 'New Stream Item')
                ->type('@stream-item-body', 'Body of the stream item')
                ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->waitForText('Shout Heard!')
                ->assertSee('Your Shout has been added to the burble');
        });
    }
}
