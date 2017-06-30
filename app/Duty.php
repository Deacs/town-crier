<?php

namespace App;

use App\Audit;
use App\Events\Chore;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class Duty extends Model
{
    /**
     * Broadcast an event informing all connected clients to reload
     */
    public static function refreshClients()
    {
        // Audit the action
        (new Audit)->record(AuditType::REFRESH_CLIENTS_ID, User::JANITOR_USER_ID);

        // Fire the event to refresh the clients
        event(new Chore('refresh'));
    }

    /**
     * Mark all active announcements as inactive
     * We don't actually 'purge' the DB - everything is still available
     */
    public static function purgeDB()
    {
        // Nothing drastic, mark active announcements as inactive
        Announcement::where('active', '=', 1)->update(['active' => 0]);
        // Audit the action
        (new Audit)->record(AuditType::PURGE_DB_ID, User::JANITOR_USER_ID);
        // Fire the event to clear the streams and refresh the clients
        event(new Chore('rewind'));
    }

    /**
     * Purge the Redis instance
     * We will need to perform periodic maintenance
     * Persistent storage is available for full audit
     */
    public static function purgeRedis()
    {
        // TODO Not actually purging Redis, just mimic subsequent behaviour
        // Audit the action
        (new Audit)->record(AuditType::PURGE_REDIS_ID, User::JANITOR_USER_ID);
        // Fire the event to refresh the clients
        event(new Chore('refresh'));
    }
}
