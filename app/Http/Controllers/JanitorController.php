<?php

namespace App\Http\Controllers;

use App\Janitor;
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
        Janitor::refreshClients();
        return redirect('janitor');
    }

    public function purge_db()
    {
        // Purge the persistent storage

        // Automatically refresh the remote clients
    }

}
