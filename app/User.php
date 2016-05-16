<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    const SYSTEM_USER_ID = 1;
    const JANITOR_USER_ID = 2;

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

    /**
     * Is the current user the System User
     *
     * @return boolean
     */
    public function isSystem()
    {
        $id = $this->getAttribute('id');
        return $id == self::SYSTEM_USER_ID;
    }

    /**
     * Is the current user the Janitor User
     *
     * @return boolean
     */
    public function isJanitor()
    {
        $id = $this->getAttribute('id');
        return $id == self::JANITOR_USER_ID;
    }
}
