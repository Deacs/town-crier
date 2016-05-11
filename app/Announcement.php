<?php

namespace App;

use App\Events\Shout;
use App\Http\Requests\Request;
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

    public function user()
    {
        return $this->belongsTo('App\User');
    }

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

            $this->create($this->data);

            // Fire the Shout event picked up by the Node app
            event(new Shout($this->data));

            $result = 'pass';
        }

        return $result;
    }
}
