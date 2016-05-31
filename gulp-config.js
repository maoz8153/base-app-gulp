module.exports = function () {
    var indexFolder = './src/server/views/';
    var indexRead = './src/server/views/index.ejs';
    var app = './src/client/app/';
    var style = './src/client/assets/stylesheets/';
    var client = './src/client/';
    var server = './src/server/';
    var browserReloadDelay = 1000;
    var config = {
        indexFolder : indexFolder,
        indexRead : indexRead,
        client : client,
        app : app,
        build: './build/',
        css : style + '*.css',
        htmlTemplates : app + '**/*.html',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        temp : './.temp',
        js : [
            app + 'app.js',
            app + 'app.config.js',
            app + 'app.run.js',
            app + '**/*.modules.js',
            app + '**/*.js'
        ],
        browserReloadDelay : browserReloadDelay,
        bower : {
            json : require('./bower.json'),
            directory : './bower_components',
            ignore :  './src/client/'
        },
        templateCache : {
            file : 'templates.js',
            options : {
                module : 'app.config',
                standAlone : false,
                root : 'app/'
            }
        },
        server : server,
        nodeServer: './src/server/bin/www'
    };

    config.getInjectDep = function () {
        var options = {
            bowerJson : config.bower.json,
            directory : config.bower.directory,
            ignorePath : config.bower.ignore
        };
        return options;
    };

    return config;
};


