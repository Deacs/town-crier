<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class JanitorMiddlewareTest extends TestBase
{

    /**
     * @test
     */
    public function standard_user_attempting_to_access_janitor_page_is_redirected_to_home()
    {
        $user = $this->createUser();

        $this->actingAs($user);

        $this->visit('/janitor')
            ->seePageIs('/');
    }

    /**
     * @test
     */
    public function standard_user_attempting_to_access_audit_log_page_is_redirected_to_home()
    {
        $user = $this->createUser();

        $this->actingAs($user);

        $this->visit('/audit-log')
            ->seePageIs('/');
    }

    /**
     * @test
     */
    public function standard_user_attempting_to_access_stats_page_is_redirected_to_home()
    {
        $user = $this->createUser();

        $this->actingAs($user);

        $this->visit('/stats')
            ->seePageIs('/');
    }
}
