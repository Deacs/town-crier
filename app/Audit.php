<?php

namespace App;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{
    protected $table = 'audit';

    protected $fillable = ['type_id', 'user_id'];

    protected $type;
    protected $user_id;

    public function type()
    {
        return $this->belongsTo('App\AuditType');
    }

    public function record($type_id, $user_id = 1)
    {
        $this->create(['type_id' => $type_id, 'user_id' => $user_id]);
    }
}
