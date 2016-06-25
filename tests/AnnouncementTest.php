<?php

use App\User;
use App\Announcement;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AnnouncementTest extends TestBase
{
    /**
     * @test
     */
    public function investment_correctly_stored()
    {
        $attributes = $this->createInvestmentAttributes();

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function funding_is_correctly_stored()
    {
        $attributes = $this->createFundingAttributes();

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function funding_milestone_is_correctly_stored()
    {
        $attributes = $this->createFundingMilestoneAttributes();

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function birthday_is_correctly_stored()
    {
        $attributes = $this->createBirthdayAttributes();

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function code_deploy_is_correctly_stored()
    {
        $attributes = $this->createCodeDeployAttributes();

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function announcement_is_correctly_stored()
    {
        $attributes = $this->createAnnouncementAttributes();

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }
}
