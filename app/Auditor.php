<?php

namespace App;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class Auditor extends Model
{

    protected $table = 'audit';

    protected $fillable = ['type', 'user_id'];

    protected $type;
    protected $user_id;

    public function record($type, $user_id = 1)
    {
        Log::info('Auditing '.$type);

        $this->create(['type' => $type, 'user_id' => $user_id]);
    }
}
