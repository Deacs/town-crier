<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            'system',
            'janitor',
            'marketing',
            'engineering'
        ];

        foreach ($users as $user) {
            factory(App\User::class)->create(['name' => ucfirst($user), 'email' => $user.'@'.env('DOMAIN'), 'password' => bcrypt($user)]);
        }
    }
}
