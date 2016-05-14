<?php

namespace App;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;

class AnnouncementType extends Model
{
    const INVESTMENT_ID     = 1;
    const FUNDED_ID         = 2;
    const ANNOUNCEMENT_ID   = 3;
    const BIRTHDAY_ID       = 4;
    const CODE_DEPLOY_ID    = 5;

    protected $id;
    protected $title;
    protected $activeAnnouncementsCount;

    public function announcements()
    {
        return $this->hasMany('App\Announcement', 'type_id');
    }

    public function getActiveAnnouncementsCountAttribute()
    {
        return $this->activeAnnouncements()->count();
    }

    public function activeAnnouncements()
    {
        $attributes = $this->getAttributes();
        return Announcement::where('type_id', $attributes['id'])->where('active', 1)->get();
    }
}
