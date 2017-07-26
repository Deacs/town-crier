<?php

namespace App;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;

    const SYSTEM_USER_ID    = 1;
    const JANITOR_USER_ID   = 2;

    protected $table = 'users';

    protected $data;
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
        'last_name',
        'email',
        'password'
    ];

    public function edit()
    {
        $this->data = Input::only('first_name', 'last_name', 'email');

        $rules = [
            'first_name'    => 'bail|required|min:2|max:255',
            'last_name'     => 'bail|required|min:2|max:255',
            'email'         => 'bail|required|email'
        ];

        // If the email has been updated, we need to check that it is unique, overwrite the standard rule
        if ($this->data['email'] !== $this->attributes['email']) {
            $rules['email'] = 'bail|required|email|unique:users';
        }

        $validator = Validator::make($this->data, $rules);

        if ($validator->passes()) {
            return $this->update($this->data);
        }

        return false;
    }

    /**
     * Add a new user
     *
     * @return string | array
     */
    public function add() 
    {
        $this->data = Input::only('first_name', 'last_name', 'email');

        $this->data['password'] = bcrypt($this->data['first_name']);

        $validator = Validator::make(
            $this->data,
            [
                'first_name'    => 'bail|required|min:2|max:255',
                'last_name'     => 'bail|required|min:2|max:255',
                'email'         => 'bail|required|email|unique:users'
            ],
            [
                'email.unique' => 'The email address must be unique'
            ]
        );

        if ($validator->passes()) {

            $this->create($this->data);

            // If an Event needs to be fired - this is a good place to broadcast from
            return 'pass';
        }
        else {
            // TODO Throw exception
            Log::info('New User Validation FAILED');
        }

        return $validator->messages();
    }

    /**
     * Remove a user - mark as deleted
     *
     * @return bool
     */
    public function remove()
    {
        // Validate that the requsting user can perform this action 
        // 
        // Validate that the user is not deleting their own account
        // 
        // Validate that the user is not already deleted
        // 
        //  Mark the user as deleted and return the result
        //  
        //  Cascade through any content and update? 
        if ($this->delete()) {
            return 'pass';
        }

        return 'fail';
        
    }

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
