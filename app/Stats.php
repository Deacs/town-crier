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
            'lastDatabasePurgeDate'     => self::lastDatabasePurgeDate(),
        ];
    }

    public static function graphData()
    {
        $graphData = [];
        $announcementTypes = AnnouncementType::all();

        foreach($announcementTypes as $type) {
            $graphData[] = [
                'type' => [
                    'title'         => $type->title,
                    'announcements' => $type->activeAnnouncementsCount
                ]
            ];
        }

        return $graphData;
    }

    /**
     * Return the date of the last client refresh
     *
     * @return string | null
     */
    public static function lastClientRefreshDate()
    {
        $lastClientRefreshDate = Audit::latest()->where('type_id', 3)->take(1)->first();

        if (! is_null($lastClientRefreshDate)) {
            return $lastClientRefreshDate->created_at;
        }

        return null;
    }

    /**
     * Return the most recently added active announcement creation date
     *
     * @return Announcement
     */
    public static function latestAnnouncementDate()
    {
        $lastAnnouncement = Announcement::latest()->where('active', 1)->take(1)->first();

        return $lastAnnouncement;
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

    /**
     * Return the date of the last database purge
     */
    public static function lastDatabasePurgeDate()
    {
        $lastDatabasePurgeDate = Audit::latest()->where('type_id', 1)->take(1)->first();

        if (! is_null($lastDatabasePurgeDate)) {
            return $lastDatabasePurgeDate->created_at;
        }
        return null;
    }
}
