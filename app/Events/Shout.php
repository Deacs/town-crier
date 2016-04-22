<?php namespace App\Events;

use App\Announcement;
use App\Events\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Shout extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $data;

    public function __construct($data)
    {
//        $data = Input::only('title', 'body', 'author', 'type');
//
//        $validator = Validator::make($data, [
//            'title'     => 'required|max:255',
//            'body'      => 'required|min:5',
//            'author'    => 'required',
//            'type'      => 'required'
//        ]);
//
//        if ($validator->passes()) {

            if (! is_null($data)) {
                $this->data = [
                    'announcement' => $data
                ];
            }

            // Save the announcement to persistent storage
//            $announcement = Announcement::create($data);
//
//            echo 'true';
//        }
//
//        echo 'false';

    }

    public function broadcastOn()
    {
        return ['town-crier'];
    }
}
