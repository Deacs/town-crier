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
                <th>Delete</th>
        	</tr>
        	@foreach($users as $user)
                @if (Auth::user()->id == $user->id)
                    <tr class="success">
                @else
                    <tr>
                @endif
        		<td>{{ $user->id }}</td>
        		<td>{{ $user->fullName() }}</td>
        		<td><a href="mailto:{{ $user->email }}">{{ $user->email }}</a></td>
        		<td><span class="glyphicon glyphicon-edit" id="edit_user_{{ $user->id }}"></span></td>
                <td>
                @if (Auth::user()->id != $user->id)
                    <span class="glyphicon glyphicon-trash" id="delete_user_{{ $user->id }}"></span>
                @else
                    &nbsp;
                @endif
                </td>
        	</tr>
        	@endforeach
        </table>


    </div>
@stop

@section('footer')
    
@stop
