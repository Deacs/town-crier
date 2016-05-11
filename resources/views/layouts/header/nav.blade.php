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
                        <li><a href="/stream"><span class="glyphicon glyphicon-list-alt"></span> Stream</a></li>
                        <li><a href="/shout"><span class="glyphicon glyphicon-bullhorn"></span> Shout</a></li>
                        <li><a href="/stats"><span class="glyphicon glyphicon-dashboard"></span> Stats</a></li>
                        <li><a href="/audit-log"><span class="glyphicon glyphicon-th-list"></span> Audit Log</a></li>
                        <li><a href="/janitor"><span class="glyphicon glyphicon-wrench"></span> Janitor</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
