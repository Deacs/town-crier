<?php

namespace App\Http\Controllers;

use App\Gossip;
use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class SystemEventController extends Controller
{
    public function mockInvestment()
    {
        Log::info('Mocking Investment');

        (new Gossip('investment'))->whisper();

    }

    public function mockFunding()
    {
        Log::info('Mocking Funding');

        (new Gossip('funded'))->whisper();
    }
}
