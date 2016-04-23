@extends('layouts.master')

@section('content')

    <div id="shouts">
        @foreach($announcements as $announcement)
            <div class="panel {{ $announcement->type }}">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ $announcement->title }}</h3>
                </div>
                <div class="panel-body">
                    {{ $announcement->body }}
                    <div class="author">
                        {{ $announcement->author }} @ {{ $announcement->created_at }}
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@stop

@section('footer')
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script>
        var socket = io('http://192.168.10.10:3000');
        socket.on("town-crier:App\\Events\\Shout", function(message) {

            console.log(message);

            if (message.data !== null) {

                var data = message.data.announcement;
                var panel = resolvePanelClass(data.type);

                var panel = $('<div class="panel panel-'+panel+'">'+
                        '<div class="panel-heading">'+
                        '<h3 class="panel-title">'+data.title+'</h3>'+
                        '</div>'+
                        '<div class="panel-body">'+
                        data.body+
                        '<div class="author">'+data.author+' @ '+data.created_at+'</div>'+
                        '</div>'+
                        '</div>').hide().fadeIn(250);

                // Display the latest Shout
                $('#shouts').prepend(panel);
            }

        });

        var resolvePanelClass = function(type) {
            switch (type) {
                case 'funded':
                    return 'success';
                case 'birthday':
                    return 'info';
                case 'investment':
                    return 'warning';
                default:
                    return 'default'
            }
        }

        $(document).ready(function() {
            $('.funded').addClass('panel-success');
            $('.birthday').addClass('panel-info');
            $('.investment').addClass('panel-warning');
        });
    </script>
@stop
