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
        // @TODO Validation required
        $announcement = Announcement::create(Input::all());

        if (! is_null($announcement)) {
            $this->data = [
                'announcement' => $announcement
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
