@extends('layouts.master')

@section('page-title')
    Stats
@stop

@section('content')
    <div class="stats">
        <div class="row">
            <h1><span class="glyphicon glyphicon-dashboard"></span> Stats</h1>
            <ul>
                <li>Total Announcements: <b>{{ $statData['activeAnnouncementsCount'] }}</b></li>
                <li>Last Announcement:
                    @if(!is_null($statData['latestAnnouncementDate']))
                        <b>{{ $statData['latestAnnouncementDate']->created_at->diffForHumans() }}</b> <b>({{ $statData['latestAnnouncementDate']->created_at->toDayDateTimeString() }})</b></li>
                    @else
                        <b>No active announcements</b>
                    @endif
                <li>Last Client Refresh:
                    @if(!is_null($statData['lastClientRefreshDate']))
                        <b>{{ $statData['lastClientRefreshDate']->diffForHumans() }}</b> <b>({{ $statData['lastClientRefreshDate']->toDayDateTimeString() }})</b></li>
                    @else
                        <b>No client refreshes recorded</b>
                    @endif
                <li>Last DB Purge:
                    @if(!is_null($statData['lastDatabasePurgeDate']))
                        <b>{{ $statData['lastDatabasePurgeDate']->diffForHumans() }}</b> <b>({{ $statData['lastDatabasePurgeDate']->toDayDateTimeString() }})</b></li>
                    @else
                    <b>No database purges recorded</b>
                    @endif
                <li>Last Redis Purge: ???</li>
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
