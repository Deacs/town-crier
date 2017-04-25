@extends('layouts.master')

@section('page-title')
    Logged Out
@stop

@section('content')
    <div class="logged-out">

        <div class="row">
            <h1><span class="glyphicon glyphicon-log-out"></span> Missing you already</h1>
        </div>

        <div class="row">
            <h2 id="logged-out-message">Y'all come back soon, ya hear?!</h2>
            <p><a href="/login" class="btn btn-lg btn-info" id="join-in"><span class="glyphicon glyphicon-log-in"></span> Join In!</a></p>
        </div>

    </div>
@stop

@section('footer')
@stop
