<?php

namespace App\Http\Controllers;

use App\Gossip;
use App\Http\Requests;
use App\AnnouncementType;
use Illuminate\Support\Facades\Log;

class SystemEventController extends Controller
{
    public function mockInvestment()
    {
        Log::info('Mocking Investment');

        return (new Gossip(AnnouncementType::INVESTMENT_ID))->whisper();

    }

    public function mockFunding()
    {
        Log::info('Mocking Funding');

        return (new Gossip(AnnouncementType::FUNDED_ID))->whisper();
    }

    public function mockCodeDeploy()
    {
        Log::info('Mocking Code Deploy');

        return (new Gossip(AnnouncementType::CODE_DEPLOY_ID))->whisper();
    }

    public function mockFundingMilestone()
    {
        Log::info('Mocking Funding Milestone');

        return (new Gossip(AnnouncementType::FUNDING_MILESTONE_ID))->whisper();
    }
}
