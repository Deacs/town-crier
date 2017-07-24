@extends('layouts.master')

@section('page-title')
    Admin
@stop

@section('content')
    <div class="admin">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> Admin</h1>

        <h3 class="alert alert-danger">Error: {{ $message }}</h3>

    </div>
@stop

@section('footer')
@stop
