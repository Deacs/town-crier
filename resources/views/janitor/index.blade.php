@extends('layouts.master')

@section('page-title')
    Janitor
@stop

@section('content')
    <div class="janitor">
        <h1><span class="glyphicon glyphicon-wrench"></span> Janitor</h1>

        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="refreshremotes"><span class="glyphicon glyphicon-refresh"></span> Refresh Clients</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="purgedb"><span class="glyphicon glyphicon-trash"></span> Purge DB</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="purgeredis"><span class="glyphicon glyphicon-erase"></span> Purge Redis</button>
        </div>
    </div>
@stop

@section('footer')
    <script>

        var actionData = {
            refreshremotes: {
                prompt: {
                    title: 'Are you sure?',
                    text: 'All remote clients will be automatically refreshed',
                    confirm: 'Yes, refresh the clients'
                },
                success: {
                    title: 'All done!',
                    text: 'All remote clients have been refreshed, Great job!'
                }
            },
            purgedb: {
                prompt: {
                    title: 'Are you sure?',
                    text: 'Persistent storage will be purged. This cannot be undone',
                    confirm: 'Yep, purge the database.'
                },
                success: {
                    title: 'All done!',
                    text: 'Database has been purged. All remote clients will now be refreshed, Great job!'
                }
            },
            purgereds: {
                prompt: {
                    title: 'Are you sure?',
                    text: 'Redis will be purged. This cannot be undone',
                    confirm: 'Yep, purge Redis.'
                },
                success: {
                    title: 'All done!',
                    text: 'Redis has been purged. All remote clients will now be refreshed, Great job!'
                }
            },
        };

        $(".janitor-task").each(function() {

            var $item = $(this);

            $item.on('click', function() {

                var action  = $item.data('action'),
                    prompt  = actionData[action].prompt,
                    success = actionData[action].success;

                swal({
                        title: prompt.title,
                        text: prompt.text,
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: prompt.confirm,
                        closeOnConfirm: false
                    }, function(){


                        $.ajax({
                            url: '/'+$item.data('action')
                        })
                        .done(function( res ) {
                            swal({
                                type: "success",
                                title: success.title,
                                text: success.text,
                                timer: 3000,
                                showConfirmButton: false
                            });
                        })
                        .fail(function ( res ) {
                            swal({
                                type: "error",
                                title: "Uh Oh",
                                text: "Your broom seems to be broken. Try again?",
                                timer: 3000,
                                showConfirmButton: false
                            });
                        });
                });
            });
        });
    </script>
@stop
