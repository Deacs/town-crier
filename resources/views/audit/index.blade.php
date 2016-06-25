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
                    <th>Action</th><th>Perfomed By</th><th>Date</th>
                </tr>
                @foreach($audits as $audit)
                    <tr>
                        <td>
                            <span class="glyphicon audit-type" data-type="{{ $audit->type->id }}"></span>
                            {{ $audit->type->title }}
                        </td>
                        <td>{{ $audit->user->name }}</td>
                        <td>{{ $audit->created_at }}</td>
                    </tr>
                @endforeach
            </table>
        </div>

        <div class="row text-center">
            {{ $audits->render() }}
        </div>

    </div>
@stop

@section('footer')
    <script>
        $(function() {

            var auditTypeStyles = {
                1: 'erase',
                2: 'trash',
                3: 'refresh'
            };
            var $auditTypeIcons = $('span.audit-type');

            $auditTypeIcons.each(function() {
                var $this   = $(this),
                    type    = $this.data('type');

                $this.addClass('glyphicon-'+auditTypeStyles[type]);
            });

        });
    </script>
@stop
