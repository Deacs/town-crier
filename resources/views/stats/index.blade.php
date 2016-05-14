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
                <li>Last Client Refresh: <b>{{ $statData['lastClientRefreshDate']->diffForHumans() }}</b> <b>({{ $statData['lastClientRefreshDate']->toDayDateTimeString() }})</b></li>
                <li>Last DB Purge: <b>{{ $statData['lastDatabasePurgeDate']->diffForHumans() }}</b> <b>({{ $statData['lastDatabasePurgeDate']->toDayDateTimeString() }})</b></li>
                <li>Last Redis Purge: ???</li>
            </ul>
        </div>

        <div class="row">
            <h2><span class="glyphicon glyphicon-stats"></span> Announcements by type</h2>
        </div>

        <div class="row">
            <canvas id="statsChart" width="400" height="200"></canvas>
        </div>
    </div>
@stop

@section('footer')
    <script>
        var ctx = document.getElementById("statsChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Announcements',
                    data: [12, 19, 3, 5, 2, 3]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    </script>
@stop
