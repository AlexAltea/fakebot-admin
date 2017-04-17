'use strict';

module.exports = function (grunt) {
    // Load tasks from grunt-* dependencies in package.json
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig({
        path: {
            app: 'app',
            dist: 'dist'
        },
        processhtml: {
            index: {
                files: {
                    'index.html': ['<%= path.app %>/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    src: 'index.html',
                    dest: 'index.html',
                }]
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= path.dist %>/fakebot-admin.css': [
                        '<%= path.app %>/styles/**/*.css'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= path.dist %>/fakebot-admin.js': [
                        '<%= path.app %>/scripts/{,*/}*.js'
                    ]
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35728,
                hostname: 'localhost',
            },
            livereload: {
                options: {
                    open: true
                }
            }
        },
        watch: {
            views: {
                files: '<%= path.app %>/{,*/}*.html',
                tasks: ['processhtml', 'htmlmin']
            },
            scripts: {
                files: '<%= path.app %>/scripts/{,*/}*.js',
                tasks: ['uglify']
            },
            styles: {
                files: '<%= path.app %>/styles/{,*/}*.css',
                tasks: ['cssmin']
            },
            livereload: {
                files: [
                    'index.html',
                    '<%= path.dist %>/*.js',
                    '<%= path.dist %>/*.css'
                ],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
        }
    });

    // Project tasks
    grunt.registerTask('build', [
        'processhtml',
        'htmlmin',
        'cssmin',
        'uglify',
    ]);
    grunt.registerTask('serve', [
        'connect',
        'watch',
    ]);
};
