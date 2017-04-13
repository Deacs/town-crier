<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class GuestUserTest extends TestBase
{
    /**
     * @test
     */
    public function can_see_login_option()
    {
        $this->visit('/')
                ->see('login');
    }

    /**
     * @test
     */
    public function cannot_see_logout_option()
    {
        $this->visit('/')
                ->dontSee('logout');
    }

    /**
     * @test
     */
    public function can_see_stream_option()
    {
        $this->visit('/')
                ->see('stream');
    }

    /**
     * @test
     */
    public function can_see_home_option()
    {
        $this->visit('/')
                ->see('home');
    }

    /**
     * @test
     */
    public function cannot_see_shout_option()
    {
        $this->visit('/')
                ->dontSee('Shout');
    }

    /**
     * @test
     */
    public function is_redirected_to_login_if_attempting_to_visit_shout_page()
    {
        $this->visit('/shout')
                ->seePageIs('/login');
    }

    /**
     * @test
     */
    public function cannot_see_janitor_option()
    {
        $this->visit('/')
            ->dontSee('Janitor');
    }

    /**
     * @test
     */
    public function is_redirected_to_login_if_attempting_to_visit_janitor_page()
    {
        $this->visit('/janitor')
            ->seePageIs('/login');
    }

    /**
     * @test
     */
    public function cannot_see_stats_option()
    {
        $this->visit('/')
            ->dontSee('Stats');
    }

    /**
     * @test
     */
    public function is_redirected_to_login_if_attempting_to_visit_stats_page()
    {
        $this->visit('/stats')
            ->seePageIs('/login');
    }

    /**
     * @test
     */
    public function cannot_see_audit_log_option()
    {
        $this->visit('/')
            ->dontSee('Audit Log');
    }

    /**
     * @test
     */
    public function is_redirected_to_login_if_attempting_to_visit_audit_log_page()
    {
        $this->visit('/audit-log')
            ->seePageIs('/login');
    }

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
     * @test
     */
    public function user_can_log_in_and_see_correct_welcome_page()
    {
        $attributes = [
            'first_name'    => 'John',
            'last_name'     => 'Doe',
            'password'      => bcrypt('johndoe')
        ];

        $user = $this->createUser($attributes);

        $this->visit('/login')
            ->submitForm('Login',
                [
                    'email'     => $user->email,
                    'password'  => 'johndoe'
                ]
            )
            ->seePageIs('/')
            ->see('Welcome back, '.$user->name);
    }
}
