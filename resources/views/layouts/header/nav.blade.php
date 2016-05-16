<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="{{ asset('/img/announcement.png') }}" alt="Town Crier" height="20px"/></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-cog"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="{{ url('/stream') }}"><span class="glyphicon glyphicon-list-alt"></span> Stream</a></li>
                        @if (Auth::guest())
                            <li><a href="{{ url('/login') }}"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        @else
                            <li><a href="{{ url('/shout') }}"><span class="glyphicon glyphicon-bullhorn"></span> Shout</a></li>
                            <li><a href="{{ url('/stats') }}"><span class="glyphicon glyphicon-dashboard"></span> Stats</a></li>
                        @if (Auth::user()->isJanitor())
                            <li><a href="{{ url('/janitor') }}"><span class="glyphicon glyphicon-sunglasses"></span> Janitor</a></li>
                            <li><a href="{{ url('/audit-log') }}"><span class="glyphicon glyphicon-th-list"></span> Audit Log</a></li>
                        @endif
                            <li><a href="{{ url('/logout') }}"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                        @endif
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
