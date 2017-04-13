<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function index()
    {
        return view('auth.logged-out');
    }

    public function performLogout()
    {
        Auth::logout();

        return redirect('logged-out');
    }
}
