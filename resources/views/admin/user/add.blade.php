@extends('layouts.master')

@section('page-title')
    Admin
@stop

@section('content')
    <div class="admin">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> Admin</h1>

        <h3><span class="glyphicon glyphicon-wrench"></span> Add New User</h3>

         <form action="/admin/user/add" id="add-user" method="POST" class="form-horizontal">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
            <div class="form-group">
                <label for="first_name" class="col-sm-2 control-label">First Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name">
                </div>
            </div>
            <div class="form-group">
                <label for="last_name" class="col-sm-2 control-label">Last Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name">
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="col-sm-2 control-label">email Address</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" id="email" placeholder="email Address">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-lg btn-primary" id="add-new-user">Add User <span class="glyphicon glyphicon-user"></span></button>
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
                title: "User Added!",
                text: "The user has been added to the crowd.",
            };
            if (response != 'pass') {
                data = {
                    type: "error",
                    title: "Uh Oh!",
                    text: "Looks like you've forgotten something. Try again",
                };
            }

            return data;
        }

        $("#add-user").submit(function(e) {

            e.preventDefault();

            var $form       = $(this),
                url         = $form.attr("action"),
                first_name  = $("input[name='first_name']"),
                last_name   = $("input[name='last_name']"),
                email       = $("input[name='email']"),
                data        = $form.serialize(),
                alertData   = {};

            var posting = $.post( url, data )
                
                .done(function( res ) {

                    alertData = respond(res);

                    swal({
                        type: alertData.type,
                        title: alertData.title,
                        text: alertData.text,
                        timer: 2500,
                        showConfirmButton: false
                    });

                    // Clear form input
                    first_name.val('');
                    last_name.val('');
                    email.val('');

                })
                .fail(function() {
                    swal({
                        type: "error",
                        title: "Uh Oh",
                        text: "Your user generation skills seems to be broken. Try again?",
                        timer: 2000,
                        showConfirmButton: false
                    });
                });
        });

    </script>
    
@stop
