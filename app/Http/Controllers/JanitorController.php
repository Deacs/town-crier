<?php

namespace App\Http\Controllers;

use App\Duty;
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
    public function refreshClients()
    {
        Duty::refreshClients();
    }

    /**
     * Fire an event that will purge the persistent storage
     */
    public function purgeDB()
    {
        Duty::purgeDB();
    }

    /**
     * Fire an event that will purge Redis
     */
    public function purgeRedis()
    {
        // @TODO
        //Duty::purgeRedis();
    }

}
