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
    protected $thumb_path;
    protected $published_at;
    protected $author;
    protected $type;
    protected $img_path;

    protected $fillable = [
        'title',
        'body',
        'user_id',
        'type_id',
        'thumb_path'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function type()
    {
        return $this->belongsTo('App\AnnouncementType', 'type_id');
    }

    /**
     * Retrieve and clean required data, store it in persistent storage,
     * decorate it and omit the event
     *
     * @return string
     */
    public function shout()
    {
        $result = 'fail';

        $this->data = Input::only('title', 'body', 'user_id', 'type_id', 'thumb_path');

        $validator = Validator::make($this->data, [
            'title'     => 'bail|required|max:255',
            'body'      => 'bail|required|min:5',
            'user_id'   => 'bail|required',
            'type_id'   => 'bail|required|integer|in:'.implode(',', AnnouncementType::$type_ids)
        ]);

        if ($validator->passes()) {

            // Some decoration needed here to add extra elements for specific types
            $this->decorateData();

            $this->create($this->data);
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

    protected function decorateData() {
        // Add the resolved author to the array
        $this->data['author'] = $this->createAuthorName();

        // Add required img path to the array
        $this->data['thumb_path'] = $this->createImgPath();
    }

    /**
     * Return the formatted full name of the authoring user
     *
     * @return string
     */
    protected function createAuthorName()
    {
        $user = User::find($this->data['user_id']);
        return $user->fullName();
    }

    /**
     * Return the stored image path or
     * create one that is specific to this announcement
     *
     * @return string
     */
    protected function createImgPath()
    {
        if (! is_null($this->thumb_path)) {
            return $this->thumb_path;
        }

        switch ($this->data['type_id']) {
            // All of the following announcements are linked to a business
            case AnnouncementType::FUNDED_ID:
            case AnnouncementType::INVESTMENT_ID:
                    $imgType = 'business';
                break;
            case AnnouncementType::FUNDING_MILESTONE_ID:
                    $imgType = 'city';
                break;
            case AnnouncementType::ANNOUNCEMENT_ID:
                    $imgType = 'nature';
                break;
            case AnnouncementType::BIRTHDAY_ID:
                    $imgType = 'people';
                break;
            case AnnouncementType::CODE_DEPLOY_ID:
                    $imgType = 'technics';
                break;
            default:
                $imgType = 'abstract';
        }

        $imgPath = 'http://lorempixel.com/'.env('THUMBNAIL_WIDTH').'/'.env('THUMBNAIL_HEIGHT').'/'.$imgType.'/?'.rand(100000, 999999);

        return $imgPath;
    }
}
