@extends('layouts.master')

@section('page-title')
    Stream
@stop

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
                        {{ $announcement->author }}, {{ $announcement->created_at->diffForHumans() }} <span class="glyphicon glyphicon-time"></span>
                    </div>
                </li>
            @endforeach
        </ul>
    </div>
@stop

@section('footer')
    <script>
        var socket = io('http://192.168.10.10:3000');

        var $shouts = $('.shouts');

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
            announcement: {
                'panel': 'danger',
                'icon': 'bullhorn'
            }
        };

        // Gossip
        socket.on("town-crier:App\\Events\\Rumour", function(output) {

            console.log(output);

        });

        // Tasks performed by the Janitor
        socket.on("town-crier:App\\Events\\Janitor", function(task) {

            var data    = task.data,
                action  = data.action;

            // Refresh the current window
            //
            if (action !== null) {
                if (action == 'refresh') {
                    location.reload();
                }
            }

        });

        socket.on("town-crier:App\\Events\\Shout", function(message) {

            if (message.data !== null) {

                var data = message.data.announcement,
                    type = typeMeta[data.type]

                console.log(data);

                var panel = $('<li class="list-group-item list-group-item-'+type.panel+'">'+
                        '<h4 class="shout-title"><span class="glyphicon glyphicon-'+type.icon+' shout-type"></span>'+data.title+'</h4>'+
                        '<div>'+
                        data.body+
                        '</div>'+
                        '<div class="author">'+data.author+', '+moment().calendar()+' <span class="glyphicon glyphicon glyphicon-time"></span></div>'+
                        '</li>').hide().fadeIn(250);

                // Display the latest Shout
                $shouts.prepend(panel);
            }
            else {
                console.log('No Data');
            }

        });

        // For each of the following elements that are found,
        // update the outlying element to swap out the type for a bootstrap style
        // and find the icon and swap out for the correct version
        var swapPanelStyles = function() {
            for (var key in typeMeta) {
                // skip loop if the property is from prototype
                if (!typeMeta.hasOwnProperty(key)) continue;

                var obj = typeMeta[key];

                for (var prop in obj) {
                    // skip loop if the property is from prototype
                    if(!obj.hasOwnProperty(prop)) continue;

                    $('.'+key).addClass('list-group-item-' + obj.panel)
                            .find('.shout-type')
                            .addClass('glyphicon-' + obj.icon);
                }
            }
        }

        // Callback function to fade in the shout stream
        // Allows a delay in order to manipulate the css
        var displayStream = function() {
            $shouts.fadeIn(1000);
        }

        $(document).ready(function() {

            swapPanelStyles(displayStream());

        });
    </script>
@stop
