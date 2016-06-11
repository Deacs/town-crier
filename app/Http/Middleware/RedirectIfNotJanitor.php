<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotJanitor
{
    /**
     * Redirects any user other than the Janitor to home route
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (! Auth::check() || ! Auth::user()->isJanitor()) {
            return redirect()->route('home');
        }

        return $next($request);
    }
}
