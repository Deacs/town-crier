<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Investment extends Command
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

//        $this->comment(PHP_EOL.Inspiring::quote().PHP_EOL);
//        $this->data = [
//            'title'         => 'Auto Generated',
//            'body'          => 'This content is automatically generated',
//            'author'        => 'Scheduler',
//            'type'          => 'announcement',
//            'created_at'    => Carbon::now()
//        ];
//
//        $schedule->call(function () {
//            event(new Shout($this->data));
//        })->everyMinute();
    }
}
