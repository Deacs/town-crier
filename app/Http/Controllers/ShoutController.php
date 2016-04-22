<?php

namespace App\Http\Controllers;

use App\Announcement;
use App\Events\Shout;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class ShoutController extends Controller
{
    public function store()
    {
        $data = Input::only('title', 'body', 'author', 'type');

        $result = 'fail';

        $validator = Validator::make($data, [
            'title'     => 'required|max:255',
            'body'      => 'required|min:5',
            'author'    => 'required',
            'type'      => 'required'
        ]);

        if ($validator->passes()) {

            // Save the announcement to persistent storage
            $announcement = Announcement::create($data);

            // Set up the data for the event
            if (! is_null($data)) {
                $this->data = [
                    'announcement' => $data
                ];
            }

            // Fire the Shout event
            event(new Shout($data));

            $result = 'pass';
        }

        return $result;
    }
}
