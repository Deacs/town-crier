<?php

namespace App;

use App\Events\Chore;
use Illuminate\Database\Eloquent\Model;

class Janitor extends Model
{
    public static function refreshClients()
    {
        event(new Chore('refresh'));
    }

    public static function purgeDB()
    {

    }

    public static function purgeRedis()
    {

    }
}
