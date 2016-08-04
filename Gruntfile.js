module.exports = function(grunt) {

    grunt.initConfig({
        paths: {
            src: "src"
        },

        jshint: {
            dist: [
                '<%= paths.src %>/**/*.js',
                '!<%= paths.src %>/**/bower_components/**/*.js'
            ],
        },

        browserSync: {
            bsFiles: {
                src: [ '<%= paths.src %>/**/*' ]
            },
            options: {
                proxy: '127.0.0.1:8010',
                port: 8080,
                open: true,
                watchTask: true
            }
        },

        php: {
            test: {
                options: {
                    port: 8010,
                    base: '<%= paths.src %>'
                }
            }
        },

        watch: {
            html: {
                files: ['<%= paths.src %>/**/*.{html,php,inc}']
            },
            js: {
                files: '<%= paths.src %>/**/*.js',
                tasks: ['jshint']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['php', 'browserSync', 'watch']);

};
