<?php

namespace App\Http\Controllers;

use App\Events\Janitor;
use Illuminate\Http\Request;

use App\Http\Requests;

class JanitorController extends Controller
{
    public function index()
    {
        return view('janitor.index');
    }

    /**
     * Fire an event that will trigger all remote clients to refresh the window
     */
    public function refresh()
    {
        event(new Janitor('refresh'));
        return redirect('janitor');
    }

}
