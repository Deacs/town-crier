@extends('layouts.master')

@section('page-title')
    Stream
@stop

@section('content')
    <div class="town-crier shouts">
        {{--<ul class="list-group shouts">--}}
            @forelse($announcements as $announcement)
                <div class="list-group-item {{ $announcement->type_id }}">
                    <h4 class="shout-title"><span class="glyphicon glyphicon-plus shout-type"></span>{{ $announcement->title }}</h4>
                    <div>
                        {{ $announcement->body }}
                    </div>
                    <div class="author">
                        {{ $announcement->user->name }}, {{ $announcement->created_at->diffForHumans() }} <span class="glyphicon glyphicon-time"></span>
                    </div>
                </div>
            @empty
                <div class="list-group-item tumbleweed" id="empty_message_item">
                    <h2 class="text-center"><span class="glyphicon glyphicon-headphones"></span> It's real quiet out there</h2>
                </div>
            @endforelse
        {{--</ul>--}}
    </div>
@stop

@section('footer')
    <script>
        var socket = io('{{ env('SOCKET_ADDRESS') }}');
        var $shouts = $('.shouts');

        var typeMeta = {
            1: {
                'panel': 'warning',
                'icon': 'piggy-bank'
            },
            2: {
                panel: 'success',
                icon: 'ok'
            },
            3: {
                'panel': 'info',
                'icon': 'user'
            },
            4: {
                'panel': 'danger',
                'icon': 'bullhorn'
            }
        };

        var choreMsgData = {
            refresh: {
                'title': 'Clean up on aisle 4',
                'text': 'We are having a quick clean up. Hold on to your hat!'
            },
            rewind: {
                'title': 'Rewind!',
                'text': 'Let\'s take it back ...... way back'
            }
        }

        // Gossip
        socket.on("town-crier:App\\Events\\Rumour", function(output) {

            console.log(output);

        });

        // Tasks performed by the Janitor
        socket.on("town-crier:App\\Events\\Chore", function(task) {

            var data    = task.data,
                action  = data.action ;

            if (action !== null) {

                if (action == 'refresh' || action == 'rewind') {

                    var msgData = choreMsgData[action];

                    swal({
                        title: msgData.title,
                        text: msgData.text,
                        type: "info",
                        showConfirmButton: false,
                        timer: 5000,
                    }, function(){
                        location.reload();
                    });
                }
            }

        });

        socket.on("town-crier:App\\Events\\Shout", function(message) {

            if (message.data !== null) {

                // Check for the empty stream message and remove if found
                $('#empty_message_item').remove();

                var data = message.data.announcement,
                    type = typeMeta[data.type_id];

                console.log(data);

                var panel = $('<div class="list-group-item list-group-item-'+type.panel+'">'+
                        '<h4 class="shout-title"><span class="glyphicon glyphicon-'+type.icon+' shout-type"></span>'+data.title+'</h4>'+
                        '<div>'+
                        data.body+
                        '</div>'+
                        '<div class="author">'+data.author+', '+moment().calendar()+' <span class="glyphicon glyphicon glyphicon-time"></span></div>'+
                        '</div>').hide().fadeIn(250);

                // Display the latest Shout
                $shouts.prepend(panel);
            }
            else {
                swal({
                    title: 'Whoops',
                    text: 'An empty Shout has been heard. Please report this error',
                    type: "error",
                    showConfirmButton: false,
                    timer: 5000,
                });
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
