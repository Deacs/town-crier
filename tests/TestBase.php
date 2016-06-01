<?php

class TestBase extends TestCase
{

    protected $fake;

    public function setUp()
    {
        parent::setUp();

        Artisan::call('migrate:refresh');
    }

    public function createUser()
    {
        $user  = factory(User::class)->create();

        return $user;
    }

}
