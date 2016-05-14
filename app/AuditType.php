<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuditType extends Model
{
    const PURGE_DB_ID           = 1;
    const PURGE_REDIS_ID        = 2;
    const REFRESH_CLIENTS_ID    = 3;

    public function audits()
    {
        return $this->hasMany('App\Audit');
    }
}
