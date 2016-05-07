@extends('layouts.master')

@section('page-title')
    Stats
@stop

@section('content')
    <div class="stats">
        <div class="row">
            <h1><span class="glyphicon glyphicon-dashboard"></span> Stats</h1>
            <ul>
                <li>Total Announcements: </li>
                <li>Last Announcement: </li>
                <li>Last DB Purge: </li>
                <li>Last Redis Purge: </li>
            </ul>
        </div>

        <div class="row">
            <h2><span class="glyphicon glyphicon-stats"></span> Announcements by type</h2>
        </div>
    </div>
@stop

@section('footer')
    <script>
    </script>
@stop
