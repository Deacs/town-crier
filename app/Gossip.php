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
        'author',
        'type'
    ];

    protected $table = 'announcements';

    protected $event;

    protected $data;

    protected $title = null;

    protected $body = null;

    protected $user_id = 1;

    protected $type = null;

    protected $faker;

    protected $actions = [
        'announcement',
        'birthday',
        'funded',
        'investment',
    ];

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
            'type'      => $this->type ?: $this->event
        ];
    }

    private function buildAnnouncementData() {

        switch ($this->event) {
            case 'announcement':
                $this->user_id = 1;
                break;
            case 'birthday':
                $this->title = 'Happy Birthday!';
                $this->body = 'It\'s '.$this->faker->name.'\'s Birthday today!';
                break;
            case 'funded':
                    $this->title = 'Pitch Funded';
                    $this->body = $this->faker->company.' has reached target!';
                break;
            case 'investment':
                    $this->title = 'Investment';
                    $this->body = $this->faker->company.' has received £'.$this->faker->numberBetween(10, 5000).' investment';
                break;
            default:
                $this->body = 'An unknown announcement has been heard';
        }
    }
}
