<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\Announcement;

Route::get('/', function () {
    return view('welcome');
});

Route::get('shout', function() {
    return view('layouts.shout');
})->name('shout-out');

Route::post('fire', function () {
    // this fires the event
    event(new App\Events\Shout());

    return redirect()->route('shout-out');
});

Route::get('stream', function () {
    // this checks for the event and displays the latest 5 from the DB
    $announcements = Announcement::latest()->take(5)->get();
    return view('layouts.stream')->with('announcements', $announcements);
});
