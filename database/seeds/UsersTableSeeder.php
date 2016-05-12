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
        factory(App\User::class)->create(['name' => 'System', 'email' => 'system@'.env('DOMAIN'), 'password' => bcrypt('oh yea oh yea')]);
        factory(App\User::class, 5)->create();
    }
}
