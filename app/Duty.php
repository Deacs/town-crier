<?php

namespace App;

use App\Events\Chore;
//use App\Announcement;
use Illuminate\Database\Eloquent\Model;

class Duty extends Model
{
    public static function refreshClients()
    {
        event(new Chore('refresh'));
    }

    public static function purgeDB()
    {
        event(new Chore('rewind'));
        Announcement::getQuery()->delete();
    }

    public static function purgeRedis()
    {
        dd('Purge Redis');
    }
}
