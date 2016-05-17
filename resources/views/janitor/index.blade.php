@extends('layouts.master')

@section('page-title')
    Janitor
@stop

@section('content')
    <div class="janitor">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> Janitor</h1>

        <h3><span class="glyphicon glyphicon-wrench"></span> Chores</h3>

        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="refreshremotes"><span class="glyphicon glyphicon-refresh"></span> Refresh Clients</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="purgedb"><span class="glyphicon glyphicon-erase"></span> Purge DB</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="purgeredis"><span class="glyphicon glyphicon-trash"></span> Purge Redis</button>
        </div>

        <h3><span class="glyphicon glyphicon-transfer"></span> System Event</h3>

        <div class="row">
            <button class="btn btn-lg btn-info janitor-task" data-action="mockinvestment"><span class="glyphicon glyphicon-piggy-bank"></span> Mock Investment</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-info janitor-task" data-action="mockfunding"><span class="glyphicon glyphicon-glass"></span> Mock Funding</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-info janitor-task" data-action="mockcodedeploy"><span class="glyphicon glyphicon-cloud-upload"></span> Mock Code Deploy</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-info janitor-task" data-action="mockfundingmilestone"><span class="glyphicon glyphicon-flag"></span> Mock Funding Milestone</button>
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
                    confirm: 'Clean \'em up good!'
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
                    confirm: 'Flush \'em, cowboy!'
                },
                success: {
                    title: 'All done!',
                    text: 'Database has been purged. All remote clients will now be refreshed, Great job!'
                }
            },
            purgeredis: {
                prompt: {
                    title: 'Are you sure?',
                    text: 'Redis will be purged. This cannot be undone',
                    confirm: 'Flush \'em, cowboy!'
                },
                success: {
                    title: 'All done!',
                    text: 'Redis has been purged. All remote clients will now be refreshed, Great job!'
                }
            },
            mockinvestment: {
                success: {
                    title: 'All done!',
                    text: 'Investment has been mocked'
                }
            },
            mockfunding: {
                success: {
                    title: 'All done!',
                    text: 'Funding has been mocked'
                }
            },
            mockcodedeploy: {
                success: {
                    title: 'All done!',
                    text: 'Code Deploy has been mocked'
                }
            },
            mockfundingmilestone: {
                success: {
                    title: 'All done!',
                    text: 'Funding Milestone has been mocked'
                }
            },
        };

        $(".janitor-task").each(function() {

            var $item = $(this);

            $item.on('click', function() {

                var action  = $item.data('action'),
                    prompt  = actionData[action].prompt,
                    success = actionData[action].success;

                if (prompt) {
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
                }
                else {
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
                }

            });
        });
    </script>
@stop
