<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AnnouncementTest extends DuskTestCase
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
        $this->browse(function ($broadcast, $stream) {
            $broadcast->loginAs(User::find(3))
                ->visit('/shout')
                ->assertSee('Shout!')
                ->type('title', 'New Stream Item')
                ->type('body', 'Body of the stream item')
                ->select('type_id', (string) AnnouncementType::ANNOUNCEMENT_ID)
                ->press('Shout!');
            // @TODO check the modal values are correct

            $stream->loginAs(User::find(4))
                ->visit('/stream')
                ->waitForText('New Stream Item')
                ->assertSee('Body of the stream item');
        });
    }
}
