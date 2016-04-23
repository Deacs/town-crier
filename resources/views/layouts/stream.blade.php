@extends('layouts.master')

@section('page-title')Stream@stop

@section('content')

    <div class="town-crier">
    <ul class="list-group shouts">
        @foreach($announcements as $announcement)
            <li class="list-group-item {{ $announcement->type }}">
                <h4 class="shout-title"><span class="glyphicon glyphicon-plus shout-type"></span>{{ $announcement->title }}</h4>
                <div>
                    {{ $announcement->body }}
                </div>
                <div class="author">
                    <span class="glyphicon glyphicon-comment author-icon"></span>{{ $announcement->author }} @ {{ $announcement->created_at }}
                </div>
            </li>
        @endforeach
    </ul>
    </div>
@stop

@section('footer')
    <script>
        var socket = io('http://192.168.10.10:3000');

        var typeMeta = {
            funded: {
                panel: 'success',
                icon: 'ok'
            },
            investment: {
                'panel': 'warning',
                'icon': 'piggy-bank'
            },
            birthday: {
                'panel': 'info',
                'icon': 'user'
            },
            d: {
                'panel': 'success',
                'icon': 'bullhorn'
            }
        };

        socket.on("town-crier:App\\Events\\Shout", function(message) {

            if (message.data !== null) {

                var data = message.data.announcement,
                    type = typeMeta[data.type]

                var panel = $('<li class="list-group-item list-group-item-'+type.panel+'">'+
                        '<h4 class="shout-title"><span class="glyphicon glyphicon-'+type.icon+' shout-type"></span>'+data.title+'</h4>'+
                        '<div>'+
                        data.body+
                        '</div>'+
                        '<div class="author"><span class="glyphicon glyphicon-comment author-icon"></span>'+data.author+' @ '+data.created_at+'</div>'+
                        '</li>').hide().fadeIn(250);

                // Display the latest Shout
                $('.shouts').prepend(panel);
            }

        });

        $(document).ready(function() {

            // For each of the following elements that are found,
            // update the outlying element to swap out the type for a bootstrap style
            // and find the icon and swap out for the correct version
            // TODO - this needs to loop the typeMeta array
            $('.funded').addClass('list-group-item-' + typeMeta.funded.panel)
                    .find('.shout-type')
                    .addClass('glyphicon-' + typeMeta.funded.icon);
            $('.birthday').addClass('list-group-item-' + typeMeta.birthday.panel)
                    .find('.shout-type')
                    .addClass('glyphicon-' + typeMeta.birthday.icon);
            $('.investment').addClass('list-group-item-' + typeMeta.investment.panel)
                    .find('.shout-type')
                    .addClass('glyphicon-' + typeMeta.investment.icon);
        });
    </script>
@stop
