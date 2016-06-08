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
     * @test
     */
    public function user_can_log_in_and_see_correct_welcome_page()
    {
        $attributes = [
            'name'      => 'John Doe',
            'password'  => bcrypt('johndoe')
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

    /**
     * @test
     */
    public function standard_user_has_no_access_to_janitor_page()
    {
        $user = $this->createUser();

        $this->actingAs($user);

        $this->visit('/janitor')
                ->seePageIs('/');
    }
}
