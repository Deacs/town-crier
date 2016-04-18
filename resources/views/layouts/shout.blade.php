@extends('layouts.master')

@section('content')
    <h2>Shout!</h2>
    <form action="fire" method="POST">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <div class="row">
            <input type="text" name="title">
        </div>
        <div class="row">
            <select name="type">
                <option value="funded">FUNDED</option>
                <option value="funded">BIRTHDAY</option>
                <option value="funded">INVESTMENT</option>
            </select>
        </div>
        <div class="row">
            <textarea name="body"></textarea>
        </div>
        <div class="row">
            <input type="submit" value="SHOUT!">
        </div>
    </form>
@stop

@section('footer')
    <script>

    </script>
@stop
