<?php

namespace App\Console\Commands;

use App\Announcement;
use App\Gossip;
use Illuminate\Console\Command;

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
        (new Gossip())->investment();
    }
}
