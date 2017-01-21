@extends('layouts.master')

@section('page-title')
    Stream
@stop

@section('container')
    foobar
@stop

@section('content')
    <div class="town-crier shouts">
        @forelse($announcements as $announcement)
            <div class="list-group-item {{ $announcement->type_id }}">
                <h4 class="shout-title"><span class="glyphicon glyphicon-plus shout-type"></span>{{ $announcement->title }}</h4>
                <div>
                    <img src="{{ $announcement->img_path }}" alt="No Image Available" />
                    {{ $announcement->body }}
                </div>
                <div class="author">
                    {{ $announcement->user->name }}, {{ $announcement->created_at->diffForHumans() }} <span class="glyphicon glyphicon-time"></span>
                </div>
            </div>
        @empty
            <div class="list-group-item tumbleweed" id="empty_message_item">
                <h2 class="text-center"><span class="glyphicon glyphicon-headphones"></span> It's real quiet out there</h2>
            </div>
        @endforelse
    </div>
@stop

@section('footer')
    <script>
        var socket = io('{{ env('SOCKET_ADDRESS') }}');
    </script>
    <script src="/js/app.js"></script>
@stop
