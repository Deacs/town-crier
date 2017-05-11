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
    
@stop
