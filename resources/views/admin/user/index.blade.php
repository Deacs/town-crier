@extends('layouts.master')

@section('page-title')
    Admin : Users
@stop

@section('content')
    <div class="admin">
        <h1><span class="glyphicon glyphicon-sunglasses"></span> Admin</h1>

        <h3><span class="glyphicon glyphicon-wrench"></span> All Users</h3>

        <table class="table table-striped">
        	<tr>
        		<th>ID</th>
        		<th>Name</th>
        		<th>Email</th>
        		<th>Edit</th>
        	</tr>
        	@foreach($users as $user)
        	<tr>
        		<td>{{ $user->id }}</td>
        		<td>{{ $user->fullName() }}</td>
        		<td><a href="mailto:{{ $user->email }}">{{ $user->email }}</a></td>
        		<td><span class="glyphicon glyphicon-edit"></span></td>
        	</tr>
        	@endforeach
        </table>


    </div>
@stop

@section('footer')
    
@stop
