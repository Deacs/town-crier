<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{

    public static function dashboardDetails()
    {
        return [
            'latestAnnouncementDate'    => self::latestAnnouncementDate(),
            'activeAnnouncementsCount'  => self::activeAnnouncementTotal(),
            'lastClientRefreshDate'     => self::lastClientRefreshDate(),
        ];
    }

    public static function lastClientRefreshDate()
    {
        $lastDatabsePurge = Audit::latest()->where('type_id', 3)->take(1)->first();
        return $lastDatabsePurge->created_at;
    }

    /**
     * Return the most recently added active announcement
     *
     * @return Announcement
     */
    public static function latestAnnouncementDate()
    {
        $lastAnnouncement = Announcement::latest()->where('active', 1)->take(1)->first();
        return $lastAnnouncement->created_at;
    }

    /**
     * Return the count of active Announcements
     *
     * @return int
     */
    public static function activeAnnouncementTotal()
    {
        return Announcement::where('active', 1)->count();
    }
}
