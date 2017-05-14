<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

use App\User;

class UserController extends Controller
{
  	
  	public function index() 
  	{

  	}

  	public function create()
  	{
  		return view('admin.user.add');
  	}

  	public function store()
  	{
  		(new User())->add();

  		return view('admin.user.index');
  	}
}
