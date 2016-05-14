@extends('layouts.master')

@section('page-title')
    Audit Log
@stop

@section('content')
    <div class="stats">
        <div class="row">
            <h1><span class="glyphicon glyphicon-th-list"></span> Audit Log</h1>
        </div>

        <div class="row">
            <table class="table table-striped">
                <tr>
                    <th>Date</th><th>Action</th><th>Perfomed By</th>
                </tr>
                @foreach($audits as $audit)

                    <tr>
                        <td>{{ $audit->created_at }}</td>
                        <td>{{ $audit->type->title }}</td>
                        <td>{{ $audit->user->name }}</td>
                    </tr>
                @endforeach
            </table>
        </div>

    </div>
@stop

@section('footer')
    <script>
    </script>
@stop
