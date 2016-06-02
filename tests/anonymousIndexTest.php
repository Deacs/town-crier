<?php

use App\User;
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
    public function user_can_log_in()
    {
        $user = factory(User::class)->create([
            'name'      => 'Janitor',
            'email'     => 'janitor@'.env('DOMAIN'),
            'password'  => bcrypt('janitor')]
        );

        $this->visit('/login')
                ->submitForm('Login',
                    [
                        'email'     => $user->email,
                        'password'  => 'janitor'
                    ]
                )
                ->seePageIs('/')
                ->see('Welcome back, '.$user->name);
    }
}
