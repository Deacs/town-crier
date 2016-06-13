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
}
