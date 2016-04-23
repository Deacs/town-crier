<?php

namespace App\Http\Controllers;

use App\Announcement;

class ShoutController extends Controller
{
    public function store()
    {
        return (new Announcement())->shout();
    }
}
