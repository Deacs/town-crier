<?php

namespace App\Http\Controllers;

use App\Announcement;

class ShoutController extends Controller
{
    public function create()
    {
        return view('layouts.shout');
    }

    public function store()
    {
        return (new Announcement())->shout();
    }
}
