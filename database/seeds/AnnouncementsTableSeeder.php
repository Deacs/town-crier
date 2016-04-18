<?php

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

        DB::table('announcements')->insert([
            'title'         => $faker->words(2),
            'body'          => $faker->text(50),
            'type'          => $faker->word(),
            'author'        => $faker->name,
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now(),
        ]);
    }
}
