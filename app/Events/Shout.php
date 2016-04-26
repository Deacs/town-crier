<?php namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Shout extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $data;

    public function __construct($data)
    {

        if (! is_null($data)) {
            $this->data = [
                'announcement' => $data
            ];
        }
    }

    public function broadcastOn()
    {
        return ['town-crier'];
    }
}
