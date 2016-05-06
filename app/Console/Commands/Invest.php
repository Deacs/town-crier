<?php

namespace App\Console\Commands;

use App\Gossip;
use App\Announcement;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Invest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'investment';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a faux investment event';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Log::info('Invest Command Response....');
        (new Gossip())->whisper();
        Log::info('After Whisper....');
//        (new Gossip())->investment();
    }
}
