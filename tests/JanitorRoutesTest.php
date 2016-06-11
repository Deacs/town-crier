<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class JanitorRoutesTest extends TestBase
{
    /**
     * @test
     */
    public function janitor_has_access_to_janitor_page()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->seePageIs('/janitor')
            ->see('Janitor')
            ->see('Chores')
            ->see('System Events');
    }

    /**
     * @test
     */
    public function can_refresh_clients()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->click('Refresh Clients')
            ->see('All Done!');
    }

    /**
     * @test
     */
    public function can_purge_db()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->click('Purge DB')
            ->see('All Done!');
    }

    /**
     * @test
     */
    public function can_purge_redis()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->click('Purge Redis')
            ->see('All Done!');
    }

    /**
     * @test
     */
    public function can_mock_investment()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
                ->click('Mock Investment')
                ->see('All Done!');
    }

    /**
     * @test
     */
    public function can_mock_funding()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->click('Mock Funding')
            ->see('All Done!');
    }

    /**
     * @test
     */
    public function can_mock_code_deploy()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->click('Mock Code Deploy')
            ->see('All Done!');
    }

    /**
     * @test
     */
    public function can_mock_funding_milestone()
    {
        $this->actAsJanitor();

        $this->visit('/janitor')
            ->click('Mock Funding Milestone')
            ->see('All Done!');
    }

}
