<?php

namespace App\Http\Controllers;

use App\Announcement;
use App\Http\Requests;
use Illuminate\Http\Request;

class StreamController extends Controller
{
    public function index()
    {
        $announcements = Announcement::latest()->where('active', 1)->take(10)->get();
        return view('stream.index')->with('announcements', $announcements);
    }
}
