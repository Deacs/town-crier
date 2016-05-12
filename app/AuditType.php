<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuditType extends Model
{
    public function audits()
    {
        return $this->hasMany('App\Audit');
    }
}
