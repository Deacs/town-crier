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

  	public function create()
  	{
  		return view('admin.user.add');
  	}

  	public function store()
  	{
  		return (new User())->add();
  	}
}
