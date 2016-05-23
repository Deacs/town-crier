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
                <h2>Well, howdy stranger!</h2>
            @else
                <h2>Welcome back, {{ Auth::user()->name }}</h2>
            @endif
        </div>
    </div>
@stop

@section('footer')
    <script>

    </script>
@stop
