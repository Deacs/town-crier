@extends('layouts.master')

@section('page-title')Shout!@stop

@section('content')
    <div class="town-crier">

        <h2>Shout!</h2>

        <form action="fire" id="shout" method="POST" class="form-horizontal">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <input type="hidden" name="author" value="System">
            <div class="form-group">
                <label for="title" class="col-sm-2 control-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="title" id="title" placeholder="Title">
                </div>
            </div>
            <div class="form-group">
                <label for="body" class="col-sm-2 control-label">Body</label>
                <div class="col-sm-10">
                    <textarea class="form-control" name="body" rows="3"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="body" class="col-sm-2 control-label">Go on,</label>
                <div class="col-sm-10">
                    <select name="type" class="form-control">
                        <option value="">shout about ...</option>
                        <option value="funded">FUNDED</option>
                        <option value="birthday">BIRTHDAY</option>
                        <option value="investment">INVESTMENT</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-lg btn-primary">Shout! <span class="glyphicon glyphicon-volume-up"></span></button>
                </div>
            </div>
        </form>
    </div>
@stop

@section('footer')
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

    </script>
@stop
