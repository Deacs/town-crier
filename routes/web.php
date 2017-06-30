<?php

Route::post('/logout', 'Auth\LogoutController@performLogout');
// Laravel 5.3+ uses POST for logout - this workaround allows a GET request
Route::get('/logout', 'Auth\LogoutController@performLogout');

Auth::routes();

Route::get('fibonacci', 
    [
        'uses' => 'HomeController@fibonacci'
    ]
);

Route::get('/logged-out',
    [
        'as'    => 'logged-out',
        'uses'  => 'Auth\LogoutController@index'
    ]
)->middleware('guest');

Route::get('/',
    [
        'as'    => 'home',
        'uses'  => 'HomeController@index'
    ]
);

Route::get('stream',
    [
        'as'    => 'stream',
        'uses'  => 'StreamController@index'
    ]
);

Route::group(['middleware' => 'auth'], function () {

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
    Route::get('admin/user/add', 
        [
            'as'    => 'add-user',
            'uses'  => 'UserController@create',
        ]
    );
    Route::post('admin/user/add', 
        [
            'as'    => 'add-user-form',
            'uses'  => 'UserController@store',
        ]
    );
    Route::get('admin/user/{id}/edit', 
        [
            'as'    => 'add-user',
            'uses'  => 'UserController@edit',
        ]
    );
    Route::get('admin/user/{id}/delete', 
        [
            'as'    => 'delete-user',
            'uses'  => 'UserController@delete',
        ]
    );
    Route::get('admin/users', 
        [
            'as'    => 'all-users',
            'uses'  => 'UserController@index',
        ]
    );

});

Route::group(['middleware' => 'janitor'], function () {

    Route::get('audit-log',
        [
            'as'    => 'audit-log',
            'uses'  => 'AuditController@index'
        ]
    );

    Route::get('stats',
        [
            'as'    => 'stats',
            'uses'  => 'StatsController@index'
        ]
    );

    Route::get('graphdata',
        [
            'as'    => 'graph-stats',
            'uses'  => 'StatsController@graphData'
        ]
    );

    Route::get('janitor',
        [
            'as'    => 'janitor',
            'uses'  => 'JanitorController@index'
        ]
    );

    Route::get('refreshremotes',
        [
            'as'    => 'refresh-remotes',
            'uses'  => 'JanitorController@refreshClients'
        ]
    );

    Route::get('purgedb',
        [
            'as'    => 'purge-db',
            'uses'  => 'JanitorController@purgeDB'
        ]
    );

    Route::get('purgeredis',
        [
            'as'    => 'purge-redis',
            'uses'  => 'JanitorController@purgeRedis'
        ]
    );

    Route::get('mockinvestment',
        [
            'as'    => 'mock-investment',
            'uses'  => 'SystemEventController@mockInvestment'
        ]
    );

    Route::get('mockfunding',
        [
            'as'    => 'mock-funding',
            'uses'  => 'SystemEventController@mockFunding'
        ]
    );

    Route::get('mockcodedeploy',
        [
            'as'    => 'mock-code-deploy',
            'uses'  => 'SystemEventController@mockCodeDeploy'
        ]
    );

    Route::get('mockfundingmilestone',
        [
            'as'    => 'mock-funding-milestone',
            'uses'  => 'SystemEventController@mockFundingMilestone'
        ]
    );
});

