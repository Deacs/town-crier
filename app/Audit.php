<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{

    protected $table = 'audit';

    protected $fillable = ['action'];

    public static function record($type)
    {

    }
}
