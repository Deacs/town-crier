@extends('layouts.master')

@section('page-title')
    Home
@stop

@section('content')
    <div class="home">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> The Town Crier</h1>

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
