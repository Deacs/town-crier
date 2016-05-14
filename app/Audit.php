<?php

namespace App;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{

    protected $table = 'audit';

    protected $fillable = ['type_id', 'user_id'];

    protected $type_id;
    protected $user_id;

    public function type()
    {
        return $this->belongsTo('App\AuditType', 'type_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function record($type_id, $user_id = User::SYSTEM_USER_ID)
    {
        $this->create(['type_id' => $type_id, 'user_id' => $user_id]);
    }
}
