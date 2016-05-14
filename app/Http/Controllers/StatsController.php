<?php

namespace App\Http\Controllers;

use App\Stats;
use App\Http\Requests;
use Illuminate\Http\Request;


class StatsController extends Controller
{
    public function index()
    {
        $statData = Stats::dashboardDetails();

        return view('stats.index')->with('statData', $statData);
    }

    public function graphdata()
    {
        $graphData = Stats::graphData();

        return $graphData;
    }
}
