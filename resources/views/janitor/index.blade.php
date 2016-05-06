@extends('layouts.master')

@section('page-title')
    Janitor
@stop

@section('content')
    <div class="janitor">
        <h1><span class="glyphicon glyphicon-wrench"></span> Janitor</h1>

        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="refresh-remotes"><span class="glyphicon glyphicon-refresh"></span> Refresh Clients</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="purge-db"><span class="glyphicon glyphicon-trash"></span> Purge DB</button>
        </div>
        <div class="row">
            <button class="btn btn-lg btn-success janitor-task" data-action="purge-redis"><span class="glyphicon glyphicon-erase"></span> Purge Redis</button>
        </div>
    </div>
@stop

@section('footer')
    <script>
        $(".janitor-task").each(function(){
            var $item = $(this);
            $item.on('click', function() {
                console.log($item.data('action'));

                $.ajax({
                    url: '/'+$item.data('action')
                }).done(function( res ) {
                    swal({
                        type: "success",
                        title: "All done!",
                        text: "Your chores are complete, take a break",
                        timer: 3000,
                        showConfirmButton: false
                    });
                }).fail(function ( res ) {
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
    </script>
@stop
