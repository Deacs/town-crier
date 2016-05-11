<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AuditTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        DB::table('audit_types')->insert([
            'id'            => 1,
            'type'          => 'Purge Database',
            'updated_at'    => Carbon::now(),
        ]);
        DB::table('audit_types')->insert([
            'id'            => 2,
            'type'          => 'Purge Redis',
            'updated_at'    => Carbon::now(),
        ]);
        DB::table('audit_types')->insert([
            'id'            => 3,
            'type'          => 'Refresh Clients',
            'updated_at'    => Carbon::now(),
        ]);
    }

}
