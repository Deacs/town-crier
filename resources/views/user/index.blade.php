@extends('layouts.master')

@section('page-title')
    Admin : Users
@stop

@section('content')
    <div class="admin">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> {{ $user->fullName() }}</h1>

        <h3><a href="mailto:{{ $user->email }}">{{ $user->email }}</a></h3>
    </div>
@stop

@section('footer')
@stop
