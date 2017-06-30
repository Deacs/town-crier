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
                    <tr id="user_{{ $user->id }}">
                @endif
        		<td>{{ $user->id }}</td>
        		<td>{{ $user->fullName() }}</td>
        		<td><a href="mailto:{{ $user->email }}">{{ $user->email }}</a></td>
        		<td><a href="/admin/user/{{ $user->id }}/edit"><span class="glyphicon glyphicon-edit" id="edit_user_{{ $user->id }}"></span></a></td>
                <td>
                @if (Auth::user()->id != $user->id)
                    <span class="glyphicon glyphicon-trash delete-user" id="delete_user_{{ $user->id }}" data-user-id="{{ $user->id }}"></span>
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

<script>

    $(".delete-user").each(function() {

        var $item = $(this);


        $item.on('click', function() {

            swal({
              title: "Are you sure?",
              text: "User will cease to be",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Yep, they gone!",
              closeOnConfirm: false
            },
            function () {

                $.ajax({
                    url: '/admin/user/'+$item.data('user-id')+'/delete'
                })
                .done(function( res ) {
                    if (res == 'pass') {
                        // Remove the relevant row from the listing
                        $('tr#user_'+$item.data('user-id')).fadeOut();
                        $('tr').removeClass('alternate').addClass('alternate');
                        //$('tr:not(.hide):odd').addClass('alternate');

                        swal("Deleted!", "Sayonara, cowboy!", "success");    
                    } else {
                        swal("Uh-Oh!", "Sorry, Cochese. Your lassoo is limp!", "error");
                    }
                })
                .fail(function ( res ) {
                    swal("Uh-Oh!", "Sorry, Cochese. Your lassoo is limp!", "error");
                });

            });
        });
        
    });

        
</script>
    
@stop
