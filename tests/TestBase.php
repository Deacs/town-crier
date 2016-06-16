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

        $attributes = [
            'title'     => $faker->company(),
            'body'      => "£".$faker->numberBetween(10, 5000)." investment. Pitch has now reached ".$faker->numberBetween(5, 99)."%",
            'type_id'   => AnnouncementType::INVESTMENT_ID,
            'user_id'   => User::SYSTEM_USER_ID
        ];

        return $attributes;
    }
}
