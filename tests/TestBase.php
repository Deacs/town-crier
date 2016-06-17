<?php

use App\User;
use App\AnnouncementType;

class TestBase extends TestCase
{

    protected $fake;

    public function setUp()
    {
        parent::setUp();

        Artisan::call('migrate:refresh');
    }

    public function createUser($attributes = [])
    {
        $user = factory(User::class)->create($attributes);

        return $user;
    }

    public function makeUser($attributes = [])
    {
        $user = factory(User::class)->make($attributes);

        return $user;
    }

    public function createSystemUser()
    {
        return $this->createUser(['id' => User::SYSTEM_USER_ID]);
    }

    public function createJanitor()
    {
        return $this->createUser(['id' => User::JANITOR_USER_ID]);
    }

    protected function actAsJanitor()
    {
        $janitor = $this->createJanitor();

        $this->actingAs($janitor);

        return $this;
    }

    protected function createAnnouncementType($attributes = [])
    {
        $announcementType = factory(AnnouncementType::class)->create($attributes);

        return $announcementType;
    }

    protected function createInvestmentAttributes()
    {
        $faker = Faker\Factory::create();

        return [
            'title'     => $faker->company(),
            'body'      => "£".$faker->numberBetween(10, 5000)." investment. Pitch has now reached ".$faker->numberBetween(5, 99)."%",
            'type_id'   => AnnouncementType::INVESTMENT_ID,
            'user_id'   => User::SYSTEM_USER_ID
        ];
    }

    protected function createFundingAttributes()
    {
        $faker = Faker\Factory::create();

        return [
            'title'     => 'Pitch Funded',
            'body'      => $faker->company().' has reached target!',
            'type_id'   => AnnouncementType::FUNDED_ID,
            'user_id'   => User::SYSTEM_USER_ID
        ];
    }

    protected function createFundingMilestoneAttributes()
    {
        $faker = Faker\Factory::create();

        $milestones = [25, 50, 75, 90, 99];

        return [
            'title'     => $faker->company(),
            'body'      => 'Milestone reached : '.$milestones[array_rand($milestones)].'% of target!',
            'type_id'   => AnnouncementType::FUNDING_MILESTONE_ID,
            'user_id'   => User::SYSTEM_USER_ID
        ];
    }

    protected function createBirthdayAttributes()
    {
        $faker = Faker\Factory::create();

        $user = $this->createUser();

        return [
            'title'     => 'Happy Birthday!',
            'body'      => "It's ".$faker->name."'s Birthday today!",
            'type_id'   => AnnouncementType::BIRTHDAY_ID,
            'user_id'   => $user->id
        ];
    }

    protected function createCodeDeployAttributes()
    {
        $user = $this->createSystemUser();

        return [
            'title'     => 'Blast Off!',
            'body'      => 'New application code successfully deployed',
            'type_id'   => AnnouncementType::CODE_DEPLOY_ID,
            'user_id'   => $user->id
        ];
    }

    protected function createAnnouncementAttributes()
    {
        $user = $this->createUser();

        return [
            'title'     => 'Announcement title',
            'body'      => 'Body of the announcement',
            'type_id'   => AnnouncementType::ANNOUNCEMENT_ID,
            'user_id'   => $user->id
        ];

    }
}
