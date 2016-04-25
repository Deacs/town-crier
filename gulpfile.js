var elixir = require('laravel-elixir');

//require('laravel-elixir-vueify');

elixir(function(mix) {

    var bootstrapPath   = 'node_modules/bootstrap-sass/assets';
    var momentPath      = 'node_modules/moment';

    mix.sass('app.scss')
        .copy(bootstrapPath + '/fonts', 'public/fonts')
        .copy(bootstrapPath + '/javascripts/bootstrap.min.js', 'public/js');

    mix.scripts([
            'app/vendor/jquery.js',
            'app/vendor/modernizr.js',
            'app/vendor/sweetalert-dev.js',
            'app/vendor/socket.io.js',
            'app/vendor/moment.min.js',
        ], 'public/js/vendor.js')
        .styles([
            './public/css/app.css',
            'app/vendor/sweetalert.css',
            'app/vendor/custom.css'
            ], './public/css/town-crier.css'
        )
});
