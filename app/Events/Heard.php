<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Heard extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $data;

    public $input;

    /**
     * Create a new event instance.
     *
     * @param $input
     */
    public function __construct($input)
    {
        $this->data = [
            'type'  => 'HEARD EVENT',
            'input' => $input
        ];
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['town-crier'];
    }
}
