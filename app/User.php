<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    const SYSTEM_USER_ID    = 1;
    const JANITOR_USER_ID   = 2;

    protected $table = 'users';

    protected $id;
    protected $first_name;
    protected $last_name;
    protected $email;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name'
    ];

    /**
     * Return a concatenated full name
     *
     * @return string
     */
    public function fullName()
    {
        return $this->getAttribute('first_name').' '.$this->getAttribute('last_name');
    }

    /**
     * Is the current user the System User
     *
     * @return boolean
     */
    public function isSystem()
    {
        return $this->getAttribute('id') == self::SYSTEM_USER_ID;
    }

    /**
     * Is the current user the Janitor
     *
     * @return boolean
     */
    public function isJanitor()
    {
        return $this->getAttribute('id') == self::JANITOR_USER_ID;
    }
}
