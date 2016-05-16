<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    const SYSTEM_USER_ID = 1;

    protected $table = 'users';

    protected $id;
    protected $name;
    protected $email;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    public function isJanitor()
    {
        return $this->id == self::SYSTEM_USER_ID;
    }
}
