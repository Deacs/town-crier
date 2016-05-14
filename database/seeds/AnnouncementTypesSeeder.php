<?php

use Illuminate\Database\Seeder;

class AnnouncementTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('announcement_types')->insert([
            'id'    => 1,
            'title' => 'Investment'
        ]);
        DB::table('announcement_types')->insert([
            'id'    => 2,
            'title' => 'Funding'
        ]);
        DB::table('announcement_types')->insert([
            'id'    => 3,
            'title' => 'Announcement'
        ]);
        DB::table('announcement_types')->insert([
            'id'    => 4,
            'title' => 'Birthday'
        ]);
        DB::table('announcement_types')->insert([
            'id'    => 5,
            'title' => 'Code Deploy'
        ]);
    }

}
