<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
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
}
