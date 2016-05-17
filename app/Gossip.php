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
    protected $actions = [1,2,3,4,5,6];

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
            'user_id'   => $this->user_id ?: User::SYSTEM_USER_ID,
            'type_id'   => $this->type_id ?: $this->event
        ];
    }

    /**
     * Create a set of data for the specified Announcement Type
     */
    private function buildAnnouncementData() {

        switch ($this->event) {

            case AnnouncementType::INVESTMENT_ID:
                    $this->title = $this->faker->company;
                    $this->body =  "£".$this->faker->numberBetween(10, 5000)." investment. Pitch has now reached ".$this->faker->numberBetween(5, 99)."%";
                break;
            case AnnouncementType::FUNDED_ID:
                    $this->title = 'Pitch Funded';
                    $this->body = $this->faker->company.' has reached target!';
                break;
            case AnnouncementType::ANNOUNCEMENT_ID:
                    $this->user_id = User::SYSTEM_USER_ID;
                break;
            case AnnouncementType::BIRTHDAY_ID:
                    $this->title = 'Happy Birthday!';
                    $this->body = "It's ".$this->faker->name."'s Birthday today!";
                break;
            case AnnouncementType::CODE_DEPLOY_ID:
                    $this->title = 'Blast Off!';
                    $this->body = 'New application code successfully deployed';
                break;
            case AnnouncementType::FUNDING_MILESTONE_ID:
                    $milestones = [25, 50, 75, 90, 99];
                    $this->title = $this->faker->company;
                    $this->body = 'Milestone reached : '.$milestones[array_rand($milestones)].'% of target!';
                break;
            default:
                $this->body = 'Hmmm, An unknown announcement has been heard';
        }
    }
}
