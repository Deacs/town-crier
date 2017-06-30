<?php

use App\User;
use App\AuditType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuditTest extends TestBase
{
    /**
     * @test
     *
     * @group fail
     */
    public function it_records_refresh_client_action()
    {
        $this->actAsJanitor();

        $this->visit('/refreshremotes');

        $this->seeInDatabase('audit', [
            'type_id' => AuditType::REFRESH_CLIENTS_ID,
            'user_id' => User::JANITOR_USER_ID
        ]);
    }

    /**
     * @test
     *
     * @group fail
     */
    public function it_records_purge_db_action()
    {
        $this->actAsJanitor();

        $this->visit('/purgedb');

        $this->seeInDatabase('audit', [
            'type_id' => AuditType::PURGE_DB_ID,
            'user_id' => User::JANITOR_USER_ID
        ]);
    }

    /**
     * @test
     *
     * @group fail
     */
    public function it_records_purge_redis_action()
    {
        $this->actAsJanitor();

        $this->visit('/purgeredis');

        $this->seeInDatabase('audit', [
            'type_id' => AuditType::PURGE_REDIS_ID,
            'user_id' => User::JANITOR_USER_ID
        ]);
    }
}
