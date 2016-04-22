@extends('layouts.master')

@section('head-scripts')
    <script src="{{ asset('js/sweetalert.min.js') }}"></script>
@stop
@section('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/sweetalert.css') }}">
@stop

@section('content')
    <div class="container">
        <h2>Shout!</h2>
        <form action="fire" id="shout" method="POST">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <div class="row">
                <input type="text" name="title">
            </div>
            <div class="row">
                <select name="type">
                    <option value="">Shout About ...</option>
                    <option value="funded">FUNDED</option>
                    <option value="birthday">BIRTHDAY</option>
                    <option value="investment">INVESTMENT</option>
                </select>
            </div>
            <div class="row">
                <textarea name="body"></textarea>
            </div>
            <input type="hidden" name="author" value="System">
            <div class="row">
                <input type="submit" class="btn btn-primary" value="SHOUT!">
            </div>
        </form>
    </div>
@stop

@section('footer')
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script>

        var respond = function(response) {

            var data = {
                type: "success",
                title: "Shout Heard!",
                text: "Your Shout has been added to the fray.",
            };
            if (response != 'pass') {
                data = {
                    type: "error",
                    title: "Uh Oh!",
                    text: "Looks like you've forgotten something, Try again",
                };
            }

            return data;
        }

        $("#shout").submit(function(e) {

            e.preventDefault();

            var $form       = $(this),
                url         = $form.attr("action"),
                title       = $("input[name='title']"),
                type        = $("select[name='type']"),
                body        = $("textarea[name='body']"),
                data        = $form.serialize(),
                alertData   = {};

            var posting = $.post( url, data )
                .done(function( res ) {

                    console.log(res);

                    alertData = respond(res);

                    swal({
                        type: alertData.type,
                        title: alertData.title,
                        text: alertData.text,
                        timer: 2500,
                        showConfirmButton: false
                    });

                    // Clear form input
                    type.val('');
                    title.val('');
                    body.val('');

                })
                .fail(function() {
                    swal({
                        type: "error",
                        title: "Uh Oh",
                        text: "Your megaphone seems to be broken. Try again?",
                        timer: 2000,
                        showConfirmButton: false
                    });
                });
        });

//        var socket = io('http://192.168.10.10:3000');
//        socket.on("town-crier:App\\Events\\Heard", function(message){
//            console.log('*** Heard Event ***');
//            console.log(message);
//
//        });

    </script>
@stop
