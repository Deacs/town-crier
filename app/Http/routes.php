<?php

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
        'uses'  => 'JanitorController@refreshClients'
    ]
);

Route::get('purge-db',
    [
        'as'    => 'purge-db',
        'uses'  => 'JanitorController@purgeDB'
    ]
);
