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
        // Nothing drastic, mark active announcements as inactive
        Announcement::where('active', '=', 1)->update(['active' => 0]);
        // Audit the action
        Audit::record('database purge');
        // Fire the event to clear the streams and refresh the clients
        event(new Chore('rewind'));
    }

    public static function purgeRedis()
    {
        dd('Purge Redis');
    }
}
