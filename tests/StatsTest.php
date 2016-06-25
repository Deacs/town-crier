<?php

use App\Announcement;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class StatsTest extends TestBase
{
    /**
     * @test
     */
    public function correct_values_returned_when_two_investments_have_been_broadcast()
    {
        // TODO These base tests need to be in an Announcement test. This is Stats specific
        // There should be no Investments stored at this point
        $investments = Announcement::where('type_id', AnnouncementType::INVESTMENT_ID)->where('active', 1)->get();

        $this->assertEquals(0, count($investments));

        $investmentOneData = $this->createInvestmentAttributes();
        Announcement::create($investmentOneData);

        $investmentTwoData = $this->createInvestmentAttributes();
        Announcement::create($investmentTwoData);

        $investments = Announcement::where('type_id', AnnouncementType::INVESTMENT_ID)->where('active', 1)->get();

        $this->assertEquals(2, count($investments));

        $investmentAnnouncement = $this->createAnnouncementType(
            [
                'id'    => AnnouncementType::INVESTMENT_ID,
                'title' => 'Investment'
            ]
        );

        $investmentAnnouncements = AnnouncementType::where('id', AnnouncementType::INVESTMENT_ID)->first();

        $this->assertEquals(2, $investmentAnnouncements->activeAnnouncementsCount);
    }
}
