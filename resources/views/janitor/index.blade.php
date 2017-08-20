@extends('layouts.master')

@section('page-title')
    Janitor
@stop

@section('content')
    <div class="janitor">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> Janitor</h1>

        <h3><span class="glyphicon glyphicon-wrench"></span> Chores</h3>

        <div class="row">
            <a class="btn btn-lg btn-success janitor-task" id="refreshremotes" data-action="refreshremotes"><span class="glyphicon glyphicon-refresh"></span> Refresh Clients</a>
        </div>
        <div class="row">
            <a class="btn btn-lg btn-success janitor-task" data-action="purgedb"><span class="glyphicon glyphicon-erase"></span> Purge DB</a>
        </div>
        <div class="row">
            <a class="btn btn-lg btn-success janitor-task" data-action="purgeredis"><span class="glyphicon glyphicon-trash"></span> Purge Redis</a>
        </div>


        <h3><span class="glyphicon glyphicon-transfer"></span> System Events</h3>

        <div class="row">
            <a class="btn btn-lg btn-info janitor-task" id="mockinvestment" data-action="mockinvestment"><span class="glyphicon glyphicon-piggy-bank"></span> Mock Investment</a>
        </div>
        <div class="row">
            <a class="btn btn-lg btn-info janitor-task" id="mockfunding" data-action="mockfunding"><span class="glyphicon glyphicon-glass"></span> Mock Funding</a>
        </div>
        <div class="row">
            <a class="btn btn-lg btn-info janitor-task" id="mockcodedeploy" data-action="mockcodedeploy"><span class="glyphicon glyphicon-cloud-upload"></span> Mock Code Deploy</a>
        </div>
        <div class="row">
            <a class="btn btn-lg btn-info janitor-task" id="mockfundingmilestone" data-action="mockfundingmilestone"><span class="glyphicon glyphicon-flag"></span> Mock Funding Milestone</a>
        </div>

        <h3><span class="glyphicon glyphicon-tasks"></span> Tasks</h3>
        <div class="row">
            <a class="btn btn-lg btn-primary janitor-task" id="addnewuser" data-action="addnewuser"><span class="glyphicon glyphicon-user"></span> Add New User</a>
        </div>
        <div class="row">
            <a class="btn btn-lg btn-primary janitor-task" id="listusers" data-action="listuser"><span class="glyphicon glyphicon-list"></span> List Users</a>
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

            var swalData = function(data, success) {
                return swal({
                    type:   success ? "success" : "error",
                    title:  data.title,
                    text:   data.text,
                    timer:  3000,
                    showConfirmButton: false
                });
            }

            $item.on('click', function() {

                var action      = $item.data('action'),
                    prompt      = actionData[action].prompt,
                    success     = actionData[action].success,
                    failData    = {
                        title: 'Uh oh',
                        text: 'Your broom seems to be broken. Try again'
                    }

                if (prompt) {

                    swal({
                        title: prompt.title,
                        text: prompt.text,
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: prompt.confirm,
                        closeOnConfirm: false,
                        //timer: 3000
                    }, function(){

                        $.ajax({
                                url: '/'+$item.data('action')
                            })
                            .done(function( res ) {
                                swalData(success, true);
                            })
                            .fail(function ( res ) {
                                swalData(failData, false);
                            });
                    });
                }
                else {
                    $.ajax({
                            url: '/'+$item.data('action')
                        })
                        .done(function( res ) {

                            if (res == 'pass') {
                                swalData(success, true);
                            }
                            else {
                                swalData(failData, false);
                            }

                        })
                        .fail(function ( res ) {
                            swalData(failData, false);
                        });
                }

            });
        });
    </script>
@stop
