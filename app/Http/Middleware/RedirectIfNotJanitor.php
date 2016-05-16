<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotJanitor
{
    /**
     * Ensure the current User is the System User (the Janitor)
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (! Auth::user()->isJanitor()) {
            return redirect()->route('home');
        }

        return $next($request);
    }
}
