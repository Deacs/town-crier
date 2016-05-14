<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AnnouncementsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i <= 10; $i++) {
            DB::table('announcements')->insert([
                'title'         => $faker->word(),
                'body'          => $faker->text(50),
                'type_id'       => $faker->randomElement($array = [1,2,3,4]),
                'user_id'       => factory(App\User::class)->create()->id,
                'active'        => $faker->boolean(50),
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now(),
            ]);
        }
    }
}
