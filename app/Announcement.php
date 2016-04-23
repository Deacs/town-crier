<?php

namespace App;

use App\Events\Shout;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Announcement extends Model
{
    protected $data;
    protected $title;
    protected $body;
    protected $published_at;
    protected $author;
    protected $type;

    protected $fillable = [
        'title',
        'body',
        'author',
        'type'
    ];

    public function shout()
    {
        $result = 'fail';

        $this->data = Input::only('title', 'body', 'author', 'type');

        $validator = Validator::make($this->data, [
            'title'     => 'required|max:255',
            'body'      => 'required|min:5',
            'author'    => 'required',
            'type'      => 'required'
        ]);

        if ($validator->passes()) {

            // Save the announcement to persistent storage
            //$this->store();


            $this->create($this->data);
            //$announcement = Announcement::create($this->data);

            // Set up the data for the event
//            if (! is_null($this->data)) {
//                $this->data = [
//                    'announcement' => $data
//                ];
//            }

//            $payload = [
//                'announcement' => $this->data
//            ];

            // Fire the Shout event
            event(new Shout($this->data));

            $result = 'pass';
        }

        return $result;
    }

//    public function store()
//    {
//        $this->store($this->data);
//    }
}
