<?php

use App\Announcement;
use App\AnnouncementType;
use App\User;
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
        $faker = Faker\Factory::create();

        $attributes = [
            'title'     => 'Pitch Funded',
            'body'      => $faker->company().' has reached target!',
            'type_id'   => AnnouncementType::FUNDED_ID,
            'user_id'   => User::SYSTEM_USER_ID
        ];

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function funding_milestone_is_correctly_stored()
    {
        $faker = Faker\Factory::create();

        $milestones = [25, 50, 75, 90, 99];

        $attributes = [
            'title'     => $faker->company(),
            'body'      => 'Milestone reached : '.$milestones[array_rand($milestones)].'% of target!',
            'type_id'   => AnnouncementType::FUNDING_MILESTONE_ID,
            'user_id'   => User::SYSTEM_USER_ID
        ];

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function birthday_is_correctly_stored()
    {
        $faker = Faker\Factory::create();

        $user = $this->createUser();

        $attributes = [
            'title'     => 'Happy Birthday!',
            'body'      => "It's ".$faker->name."'s Birthday today!",
            'type_id'   => AnnouncementType::BIRTHDAY_ID,
            'user_id'   => $user->id
        ];

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function code_deploy_is_correctly_stored()
    {
        $user = $this->createSystemUser();

        $attributes = [
            'title'     => 'Blast Off!',
            'body'      => 'New application code successfully deployed',
            'type_id'   => AnnouncementType::CODE_DEPLOY_ID,
            'user_id'   => $user->id
        ];

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }

    /**
     * @test
     */
    public function announcement_is_correctly_stored()
    {
        $user = $this->createUser();

        $attributes = [
            'title'     => 'Announcement title',
            'body'      => 'Body of the announcement',
            'type_id'   => AnnouncementType::ANNOUNCEMENT_ID,
            'user_id'   => $user->id
        ];

        Announcement::create($attributes);

        $this->seeInDatabase('announcements', $attributes);
    }
}
