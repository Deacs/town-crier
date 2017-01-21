<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AnnouncementsTableSeeder extends Seeder
{
    private $types = [
        1 => 'business',
        2 => 'business',
        3 => 'abstract',
        4 => 'people',
        5 => 'technics',
        6 => 'city'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i <= 10; $i++) {

            $type_id    = array_rand($this->types);
            $thumb_type = $this->types[$type_id];

            DB::table('announcements')->insert([
                'title'         => $faker->word(),
                'body'          => $faker->text(50),
                'thumb_path'    => $faker->imageUrl(env('THUMBNAIL_WIDTH'), env('THUMBNAIL_HEIGHT'), $thumb_type),
                'type_id'       => $type_id,
                'user_id'       => factory(App\User::class)->create()->id,
                'active'        => $faker->boolean(50),
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now(),
            ]);
        }
    }
}
