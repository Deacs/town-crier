<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use App\AnnouncementType;
use Tests\Browser\Pages\ShoutPage;
use Tests\Browser\Pages\StreamPage;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class InvalidAnnouncementTest extends DuskTestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * No fields have been completed
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedForAnnouncementMissingAllData()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again');
        });
    }

    /**
     * Ensure that an announcement that fails validation does not appear in the stream
     * No fields have been completed
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testStreamDoesNotContainAnnouncementThatFailedValidationDueToLackOfAnyData()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->press('Shout!')
                ->visit(new StreamPage)
                ->assertDontSeeIn('@author', $user->fullName());
        });
    }

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * Title value has not been entered
     *
     * @group stream
     * @group announcement
     * @group invalid
     * @group failing
     *
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForAnnouncementMissingTitle()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-body', 'Body of the stream item')
                ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again');
        });
    }

    /**
     * Ensure that an announcement that fails validation does not appear in the stream
     * Title value has not been entered
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testStreamDoesNotContainAnnouncementThatFailedValidationDueToLackOfTitle()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-body', 'Body of the stream item')
                ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->visit(new StreamPage)
                ->assertDontSeeIn('@stream-body', 'Body of the stream item')
                ->assertDontSeeIn('@author', $user->fullName());
        });
    }

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * Body value has not been entered
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForAnnouncementMissingBody()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-title', 'New Stream Item')
                ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again')
                ->visit(new StreamPage)
                ->assertDontSeeIn('@shout-title', 'New Stream Item')
                ->assertDontSeeIn('@author', $user->fullName());
        });
    }

    /**
     * Ensure that an announcement that fails validation does not appear in the stream
     * Body value has not been entered
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testStreamDoesNotContainAnnouncementThatFailedValidationDueToLackOfBody()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-title', 'New Stream Item')
                ->select('@stream-item-type', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!')
                ->visit(new StreamPage)
                ->assertDontSeeIn('@shout-title', 'New Stream Item')
                ->assertDontSeeIn('@author', $user->fullName());
        });
    }

    /**
     * Check that correct messaging displayed within modal for a message that fails validation
     * Announcement type has not been selected from the drop down
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testCorrectConfirmationMessageStringsDisplayedInModalForAnnouncementWithoutSelectedType()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-title', 'New Stream Item')
                ->type('@stream-item-body', 'Body of the stream item')
                ->press('Shout!')
                ->waitForText('Uh Oh!')
                ->assertSee('Looks like you\'ve forgotten something. Try again');
        });
    }

    /**
     * Ensure that an announcement that fails validation does not appear in the stream
     * Type value has not been selected
     *
     * @group stream
     * @group announcement
     * @group invalid
     *
     * @return void
     */
    public function testStreamDoesNotContainAnnouncementThatFailedValidationDueToLackOfType()
    {
        $user = User::find(3);

        $this->browse(function ($broadcast) use ($user) {
            $broadcast->loginAs($user)
                ->visit(new ShoutPage)
                ->assertSee('Shout!')
                ->type('@stream-item-title', 'New Stream Item')
                ->type('@stream-item-body', 'Body of the stream item')
                ->press('Shout!')
                ->visit(new StreamPage)
                ->assertDontSeeIn('@shout-title', 'New Stream Item')
                ->assertDontSeeIn('@stream-body', 'Body of the stream item')
                ->assertDontSeeIn('@author', $user->fullName());
        });
    }
}
