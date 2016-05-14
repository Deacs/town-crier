<?php

namespace App\Http\Controllers;

use App\Announcement;
use App\AnnouncementType;

class ShoutController extends Controller
{
    public function create()
    {
        $announcementTypes = AnnouncementType::all();
        return view('layouts.shout')->with('announcement_types', $announcementTypes);
    }

    public function store()
    {
        return (new Announcement())->shout();
    }
}
