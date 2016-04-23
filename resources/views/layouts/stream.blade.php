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
        socket.on("town-crier:App\\Events\\Shout", function(message) {

            if (message.data !== null) {

                var data = message.data.announcement;
                var type = resolveShoutClass(data.type);

                var panel = $('<li class="list-group-item list-group-item-'+type.panel+'">'+
                        '<h4 class="shout-title"><span class="glyphicon shout-type"></span>'+data.title+'</h4>'+
                        '<div>'+
                        data.body+
                        '</div>'+
                        '<div class="author"><span class="glyphicon glyphicon-comment author-icon"></span>'+data.author+' @ '+data.created_at+'</div>'+
                        '</li>').hide().fadeIn(250);

                // Display the latest Shout
                $('.shouts').prepend(panel);

                console.log(panel);
            }

        });

        var resolveShoutClass = function(type) {

            switch (type) {
                case 'funded':
                    return {
                        'panel': 'success',
                        'icon': 'ok',
                    };
                case 'birthday':
                    return {
                        'panel': 'info',
                        'icon': 'user',
                    };
                case 'investment':
                    return {
                        'panel': 'warning',
                        'icon': 'piggy-bank',
                    };
                default:
                    return {
                        'panel': 'default',
                        'icon': 'bullhorn',
                    };
            }
        }

        $(document).ready(function() {

            // For each of the following elements that are found,
            // update the outlying element to swap out the type for a bootstrap style
            // and find the icon and swap out for the correct version
            $('.funded').addClass('list-group-item-'+resolveShoutClass('funded').panel)
                    .find('.shout-type')
                    .addClass('glyphicon-'+resolveShoutClass('funded').icon);
            $('.birthday').addClass('list-group-item-'+resolveShoutClass('birthday').panel)
                    .find('.shout-type')
                    .addClass('glyphicon-'+resolveShoutClass('birthday').icon);
            $('.investment').addClass('list-group-item-'+resolveShoutClass('investment').panel)
                    .find('.shout-type')
                    .addClass('glyphicon-'+resolveShoutClass('investment').icon);
//            $('.birthday').addClass('list-group-item-info');
//            $('.investment').addClass('list-group-item-warning');
        });
    </script>
@stop
