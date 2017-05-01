<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            return redirect('/');
        }

        return view('auth.logged-out');
    }

    public function performLogout()
    {
        if ( ! Auth::check()) {
            return redirect('/');
        }

        Auth::logout();
        return redirect('logged-out');
    }
}
