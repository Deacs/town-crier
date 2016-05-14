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
                <li>Last Redis Purge:
                    @if(!is_null($statData['lastRedisPurgeDate']))
                        <b>{{ $statData['lastRedisPurgeDate']->diffForHumans() }}</b> <b>({{ $statData['lastRedisPurgeDate']->toDayDateTimeString() }})</b></li>
                @else
                    <b>No Redis purges recorded</b>
                @endif
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
        $(function() {

            var graphLabels = [],
                graphData   = []

            $.get( "graphdata", function( data ) {

                for (var i = 0; i < data.length; i++) {
                    graphLabels.push(data[i].type.title);
                    graphData.push(data[i].type.announcements);
                }

                var ctx = document.getElementById("statsChart");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: graphLabels,
                        datasets: [{
                            label: '# of Announcements',
                            data: graphData,
                            backgroundColor: '#da7600'
                        }]
                    },
                    options: {
                    }
                });
            });

        });


    </script>
@stop
