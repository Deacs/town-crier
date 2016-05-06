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

Route::get('shout',
    [
        'as'    => 'shout-out',
        'uses'  => 'ShoutController@create'
    ]
);

Route::post('fire',
    [
        'as' 	=> 'store-shout',
        'uses' 	=> 'ShoutController@store',
    ]
);

Route::get('stream',
    [
        'as'    => 'stream',
        'uses'  => 'StreamController@index'
    ]
);

Route::get('janitor',
    [
        'as'    => 'janitor',
        'uses'  => 'JanitorController@index'
    ]
);

Route::get('refresh',
    [
        'as'    => 'refresh-remotes',
        'uses'  => 'JanitorController@refresh'
    ]
);

Route::get('purge-db',
    [
        'as'    => 'purge-db',
        'uses'  => 'JanitorController@purge_db'
    ]
);
