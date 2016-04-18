<?php namespace App\Events;

use App\Announcement;
use App\Events\Event;
use Illuminate\Support\Facades\Input;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Shout extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $data;

    public function __construct()
    {
        // Save the announcement to persistent storage
        $announcement = Announcement::create(Input::all());

        if (! is_null($announcement)) {
            $this->data = [
                'announcement' => Input::all()
            ];
        }
        else {
            dd('FAILED!');
        }

    }

    public function broadcastOn()
    {
        return ['test-channel'];
    }
}
