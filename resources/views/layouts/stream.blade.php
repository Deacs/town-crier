@extends('layouts.master')

@section('page-title')Stream@stop

@section('content')

    <div class="town-crier">
    <ul class="list-group shouts">
        @foreach($announcements as $announcement)
            <li class="list-group-item {{ $announcement->type }}">
                <h3 class="panel-title">{{ $announcement->title }}</h3>
                <div>
                    {{ $announcement->body }}
                    <div class="author">
                        {{ $announcement->author }} @ {{ $announcement->created_at }}
                    </div>
                </div>
            </li>
        @endforeach
    </ul>
    </div>
@stop

@section('footer')
    <script>
        var socket = io('http://192.168.10.10:3000');
        socket.on("town-crier:App\\Events\\Shout", function(message) {

            console.log(message);

            if (message.data !== null) {

                var data = message.data.announcement;
                var panel = resolvePanelClass(data.type);

                var panel = $('<li class="list-group-item list-group-item-'+panel+'">'+
                        '<h3 class="panel-title">'+data.title+'</h3>'+
                        '<div>'+
                        data.body+
                        '<div class="author">'+data.author+' @ '+data.created_at+'</div>'+
                        '</div>'+
                        '</li>').hide().fadeIn(250);

                // Display the latest Shout
                $('.shouts').prepend(panel);
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
            $('.funded').addClass('list-group-item-success');
            $('.birthday').addClass('list-group-item-info');
            $('.investment').addClass('list-group-item-warning');
        });
    </script>
@stop
