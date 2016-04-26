@extends('layouts.master')

@section('page-title')
    Janitor
@stop

@section('content')
    <div class="janitor">
        <h1><span class="glyphicon glyphicon-wrench"></span> Janitor</h1>

        <div class="row">
            <a href="/refresh" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-refresh"></span> Refresh</a>
        </div>
    </div>
@stop

@section('footer')
@stop
