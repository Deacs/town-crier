<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AnonymousIndexTest extends TestBase
{
    /**
     * @test
     */
    public function login_button_displayed()
    {
        $this->visit('/')
             ->see('Join In!');
    }

    /**
     * @test
     */
    public function login_form_accessible_from_login_button()
    {
        $this->visit('/')
                ->click('Join In!')
                ->seePageIs('/login');
    }

    /**
     * @_test
     */
    public function janitor_can_log_in()
    {
        $this->visit('/login')
                ->submitForm('Login',
                    [
                        'email'    => 'janitor@'.env('DOMAIN'),
                        'password' => 'janitos',
                    ]
                )
                ->seePageIs('/')
                ->see('Welcome back, Janitor');
    }
}
