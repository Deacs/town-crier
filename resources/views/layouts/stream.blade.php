@extends('layouts.master')

@section('content')
    <h2>Town Crier</h2>

    <div id="shouts">

    </div>
@stop

@section('footer')
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script>
        var socket = io('http://192.168.10.10:3000');
        socket.on("test-channel:App\\Events\\Shout", function(message){

            console.log(message);

            // Display the latest Shout
            $('#shouts').prepend('<div class="shout"><h3>'+message.data.announcement.title+'</h3></div>');

        });
    </script>
@stop
