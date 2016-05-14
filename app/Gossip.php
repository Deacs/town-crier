<?php

namespace App;

use Faker\Factory;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Model;

class Gossip extends Model
{
    protected $fillable = [
        'title',
        'body',
        'user_id',
        'type_id'
    ];

    protected $table = 'announcements';

    protected $event;

    protected $data;

    protected $title = null;

    protected $body = null;

    protected $user_id = 1;

    protected $type_id = null;

    protected $faker;

    protected $actions = [1,2,3,4];

    public function __construct($eventType = null)
    {
        $this->faker = Factory::create();

        if (! is_null($eventType) && in_array($eventType, $this->actions)) {
            $this->event = $eventType;
        }
        else {
            $this->generateRandomEventType();
        }
    }

    private function generateRandomEventType()
    {
        $this->event = $this->actions[array_rand($this->actions)];
    }

    /**
     * Broadcast a fake event
     */
    public function whisper()
    {
        Log::info('firing random '.$this->event.' event');

        Input::merge($this->buildPayload());

        (new Announcement())->shout();
    }

    /**
     * Build the payload for the event broadcast
     *
     * @return array
     */
    private function buildPayload() {

        $this->buildAnnouncementData();

        return [
            'title'     => $this->title ?: $this->faker->company,
            'body'      => $this->body ?: $this->faker->text,
            'user_id'   => $this->user_id ?: 1,
            'type_id'   => $this->type_id ?: $this->event
        ];
    }

    private function buildAnnouncementData() {

        switch ($this->event) {

            case 1:
                    $this->title = 'Investment';
                    $this->body = $this->faker->company.' has received £'.$this->faker->numberBetween(10, 5000).' investment';
                break;
            case 2:
                    $this->title = 'Pitch Funded';
                    $this->body = $this->faker->company.' has reached target!';
                break;
            case 3:
                    $this->user_id = 1;
                break;
            case 4:
                    $this->title = 'Happy Birthday!';
                    $this->body = 'It\'s '.$this->faker->name.'\'s Birthday today!';
                break;
            default:
                $this->body = 'An unknown announcement has been heard';
        }
    }
}
