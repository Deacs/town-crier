@extends('layouts.master')

@section('content')
    <h2>Town Crier</h2>

    <div id="shouts">
        @foreach($announcements as $announcement)
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ $announcement->title }}</h3>
                </div>
                <div class="panel-body">
                    {{ $announcement->body }}
                </div>
            </div>
        @endforeach
    </div>
@stop

@section('footer')
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script>
        var socket = io('http://192.168.10.10:3000');
        socket.on("test-channel:App\\Events\\Shout", function(message){

            console.log(message);
            var data = message.data.announcement;
            var panel = '<div class="panel panel-default">'+
                        '<div class="panel-heading">'+
                        '<h3 class="panel-title">'+data.title+'</h3>'+
                        '</div>'+
                        '<div class="panel-body">'+
                        data.body+
                        '</div>'+
                        '</div>';

            // Display the latest Shout
            $('#shouts').prepend(panel);
        });
    </script>
@stop
