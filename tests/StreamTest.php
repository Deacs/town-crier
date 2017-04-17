<?php

use App\User;
use App\Announcement;
use App\AnnouncementType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class StreamTest extends TestBase
{
    /**
     * @test
     */
    public function investment_is_correctly_displayed()
    {
        $user = $this->createSystemUser();

        $attributes = $this->createInvestmentAttributes();

        Announcement::create($attributes);

        $this->visit('/stream')
            ->see($attributes['title'])
            ->see($attributes['body'])
            ->see($user->name);
    }

    /**
     * @test
     */
    public function funding_is_correctly_displayed()
    {
        $user = $this->createSystemUser();

        $attributes = $this->createFundingAttributes();

        Announcement::create($attributes);

        $this->visit('/stream')
            ->see($attributes['title'])
            ->see($attributes['body'])
            ->see($user->name);
    }

    /**
     * @test
     */
    public function funding_milestone_is_correctly_displayed()
    {
        $user = $this->createSystemUser();

        $attributes = $this->createFundingMilestoneAttributes();

        Announcement::create($attributes);

        $this->visit('/stream')
            ->see($attributes['title'])
            ->see($attributes['body'])
            ->see($user->name);
    }

    /**
     * @test
     */
    public function birthday_is_correctly_displayed()
    {
        $user = $this->createUser();

        $attributes = $this->createBirthdayAttributes();

        Announcement::create($attributes);

        $this->visit('/stream')
            ->see($attributes['title'])
            ->see($attributes['body'])
            ->see($user->name);
    }

    /**
     * @test
     */
    public function code_deploy_is_correctly_displayed()
    {
        $user = $this->createSystemUser();

        $attributes = $this->createCodeDeployAttributes();

        Announcement::create($attributes);

        $this->visit('/stream')
            ->see($attributes['title'])
            ->see($attributes['body'])
            ->see($user->name);
    }

    /**
     * @test
     */
    public function announcement_is_correctly_displayed()
    {
        $user = $this->createUser();

        $attributes = $this->createAnnouncementAttributes($user);

        Announcement::create($attributes);

        $this->visit('/stream')
            ->see($attributes['title'])
            ->see($attributes['body'])
            ->see($user->name);
    }
}
