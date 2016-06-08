<?php

use App\User;

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
}
