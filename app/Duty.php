<?php

namespace App;

use App\Audit;
use App\Events\Chore;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class Duty extends Model
{
    public static function refreshClients()
    {
        // Audit the action
        Log::info('Calling Audit for client Refresh');

        $audit = new Audit();
        $audit->record(3, 1);

        event(new Chore('refresh'));
    }

    public static function purgeDB()
    {
        // Nothing drastic, mark active announcements as inactive
        Announcement::where('active', '=', 1)->update(['active' => 0]);
        // Fire the event to clear the streams and refresh the clients
        event(new Chore('rewind'));
    }

    public static function purgeRedis()
    {
        // Audit the action
        Audit::record('redis purged');
        dd('Purge Redis');
    }
}
