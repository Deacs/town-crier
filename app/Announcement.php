<?php

namespace App;

use App\Events\Shout;
use Illuminate\Support\Facades\Log;
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
        'user_id',
        'type_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function type()
    {
        return $this->belongsTo('App\AnnouncementType', 'type_id');
    }

    public function shout()
    {
        $result = 'fail';

        $this->data = Input::only('title', 'body', 'user_id', 'type_id');

        $validator = Validator::make($this->data, [
            'title'     => 'required|max:255',
            'body'      => 'required|min:5',
            'user_id'   => 'required',
            'type_id'   => 'required|integer|in:'.implode(',', AnnouncementType::$type_ids)
        ]);

        if ($validator->passes()) {

            $this->create($this->data);

            // Add the resolved author to the array
            $this->data['author'] = User::find($this->data['user_id'])->name;

            // Fire the Shout event picked up by the Node app
            event(new Shout($this->data));

            $result = 'pass';
        }
        else {
            // TODO Throw exception
            Log::info('Shout Validation FAILED');
        }

        return $result;
    }
}
