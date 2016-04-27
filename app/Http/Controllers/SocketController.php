<?php namespace App\Http\Controllers;

use LRedis;
use Request;
use App\Http\Requests;
use App\Events\Janitor;
use App\Http\Controllers\Controller;

class SocketController extends Controller {

    /**
     * Fire an event that will trigger all remote clients to refresh the window
     */
    public function refresh()
    {
        event(new Janitor('refresh'));
        dd('Calling Janitor Refresh');
    }

//    public function __construct()
//    {
//        $this->middleware('guest');
//    }
//
//    public function index()
//    {
//        return view('socket');
//    }
//
//    public function writemessage()
//    {
//        return view('writemessage');
//    }
//
//    public function sendMessage(){
//        // Store message in DB
//
//        $redis = LRedis::connection();
//        $redis->publish('message', Request::input('message'));
//
//        return redirect('writemessage');
//    }
}
