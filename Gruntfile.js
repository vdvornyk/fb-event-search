'use strict';

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;


module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    //require('time-grunt')(grunt);
// Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            //server: {
                options: {
                    port: 8000,
                    keepalive: true,
                    hostname: 'localhost',
                    base: ''
                },
                livereload: {
                    options: {
                        middleware: function (connect) {
                            return [
                                proxySnippet,
                                lrSnippet,
                                mountFolder(connect, '.tmp'),
                                mountFolder(connect, '')
                            ];
                        }
                    }
                },
                proxies: [
                    //{
                    //    context: '/',
                    //    host: '127.0.0.1',
                    //    port: 443,
                    //    https: false,
                    //    xforward: false,
                    //    rewrite: {
                    //        'webapi': '/'
                    //    }
                    //}
                ]
            }
        //}

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks("grunt-connect-proxy");

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            //'clean',
            'configureProxies',
            'livereload-start',
            'connect:livereload'
            //'open',
            //'watch'
        ]);
    });
};