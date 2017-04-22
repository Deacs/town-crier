@extends('layouts.master')

@section('page-title')
    Home
@stop

@section('content')
    <div class="home">

        <div class="row">
            <h1><span class="glyphicon glyphicon-home"></span> The Town Square</h1>
        </div>

        <div class="row">
            @if (Auth::guest())
                <h2 id="welcome-message">Well, howdy stranger!</h2>
                <p><a href="/login" class="btn btn-lg btn-info" id="join-in"><span class="glyphicon glyphicon-log-in"></span> Join In!</a></p>
            @else
                <h2 id="welcome-message">Welcome back, {{ Auth::user()->first_name }}</h2>
            @endif
        </div>
    </div>
@stop

@section('footer')
    <script>

    </script>
@stop
