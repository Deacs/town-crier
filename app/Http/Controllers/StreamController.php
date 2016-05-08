<?php

namespace App\Http\Controllers;

use App\Announcement;
use Illuminate\Http\Request;

use App\Http\Requests;

class StreamController extends Controller
{
    public function index()
    {
        $announcements = Announcement::latest()->where('active', 1)->take(10)->get();
        return view('layouts.stream')->with('announcements', $announcements);
    }
}
