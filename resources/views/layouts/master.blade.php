<!doctype html>

<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="{{ asset('css/town-crier.css') }}">
    <meta charset="UTF-8">
    <title>Town Crier @yield('page-title')</title>
</head>
<html lang="en">
<body>
    @include('layouts.header.nav')
    <div class="@yield('container', 'container') main">
        @yield('content')
    </div>

    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    @yield('footer')
</body>
</html>
