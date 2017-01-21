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
        return $this->belongsTo('App\User');
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
            'title'     => 'required|max:255',
            'body'      => 'required|min:5',
            'user_id'   => 'required',
            'type_id'   => 'required|integer|in:'.implode(',', AnnouncementType::$type_ids)
        ]);

        if ($validator->passes()) {

            $this->create($this->data);

            // Some decoration needed here to add extra elements for specific types
            $this->decorateData();

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
//        $this->data['img_path'] = $this->createImgPath();
        $this->data['thumb_path'] = $this->createImgPath();
    }

    protected function createAuthorName()
    {
        return User::find($this->data['user_id'])->name;
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

        $imgPath = 'http://lorempixel.com/'.env('THUMBNAIL_WIDTH').'/'.env('THUMBNAIL_HEIGHT').'/'.$imgType.'/?'.rand(1000000, 999999);

        return $imgPath;
    }
}
