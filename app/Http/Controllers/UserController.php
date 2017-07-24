<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
  	
  	public function index() 
  	{
  		$users = User::all();

  		return view('admin.user.index')->with('users', $users);
  	}

    public function show($id)
  	{
        $user = User::find($id);

        if ($user) {
            return view('user.index')->with('user', $user);
        }

        return view('admin.user.error')->with('message', 'User Not Found');
  	}

  	public function create()
  	{
  		return view('admin.user.add');
  	}

  	public function store()
  	{
  		return (new User())->add();
  	}

    public function edit($id)
  	{
        $user = User::find($id);

        if ($user) {
            return view('admin.user.edit')->with('user', $user);
        }

        return view('admin.user.error')->with('message', 'User Not Found');
  	}

    public function update()
    {
        $user = User::findOrFail(Input::get('user_id'));

        if ($user->edit()) {
            return redirect()->route('user-profile', ['id' => $user->id]);
        }

        return back()->withErrors();
    }

    public function delete($id)
    {
      $user = User::findOrFail($id);
      return $user->remove();
    }
}
