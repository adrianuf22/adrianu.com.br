module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        distpath: './',
        sass: {
            dist: {
                files: [
                    {
                        cwd: 'src/assets/css'
                        , expand: true
                        , src: ['**/*.scss']
                        , dest: '<%= distpath %>www/css/'
                        , ext: '.css'
                    }
                ]
            }
        }

        , cssmin: {
            prod: {
                files: [
                    {
                        expand: true
                        , cwd: '<%= distpath %>www/css/'
                        , src: ['**/*.css']
                        , dest: '<%= distpath %>www/css/'
                    }
                ]
            }
        }

        , concat: {
            app: {
                src: ['src/assets/js/body.control.js']
                , dest: '<%= distpath %>www/js/app.js'
            }
            , third: {
                src: ['src/assets/js/third/hammer.min.js']
                , dest: '<%= distpath %>www/js/third.js'
            }
        }

        , uglify: {
            dist: {
                files: [
                    {
                        expand: true
                        , cwd: '<%= distpath %>www/js/'
                        , src: '**/*.js'
                        , dest: '<%= distpath %>www/js/'
                    }
                ]
            }
        }

        , copy: {
            index: {
                files: [
                    {
                        src: [
                            'index.html'
                            , '.htaccess'
                            , 'vendor/**/*'
                        ]
                        , dest: '<%= distpath %>'
                    }
                ]
            }
            , img: {
                files: [
                    {
                        expand: true
                        , cwd: 'src/assets/images/'
                        , src: ['bodies/**', 'favicon.png', 'logo.svg']
                        , dest: '<%= distpath %>www/images/'
                    }
                ]
            }
            , fonts: {
                files: [
                    {
                        expand: true
                        , cwd: 'src/assets/fonts/'
                        , src: [
                        '**/*.otf'
                        , 'icons.eot'
                        , 'icons.ttf'
                        , 'icons.woff'
                    ]
                        , dest: '<%=distpath %>www/fonts/'
                    }
                ]
            }
        }

        , clean: {
            css: ['<%= distpath %>www/css']
            , img: ['<%= distpath %>www/images']
            , fonts: ['<%= distpath %>www/fonts']
        }

        , replace: {
            buildHash: {
                options: {
                    patterns: [
                        {
                            match: 'build'
                            , replacement: new Date().getTime()
                        }
                    ]
                }
                , files: [
                    {
                        expand: true
                        , flatten: true
                        , src: ['<%= distpath %>index.html']
                        , dest: '<%= distpath %>'
                    }
                ]
            }
        }
    });

    grunt.registerTask('js', function () {
        grunt.loadNpmTasks('grunt-contrib-concat');

        grunt.task.run(['concat']);
    });

    grunt.registerTask('jsBuild', function () {
        grunt.loadNpmTasks('grunt-contrib-uglify');

        grunt.task.run(['uglify']);
    });

    grunt.registerTask('css', function () {
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-sass');

        grunt.task.run(['clean:css', 'sass']);
    });

    grunt.registerTask('cssBuild', function () {
        grunt.loadNpmTasks('grunt-contrib-cssmin');

        grunt.task.run(['cssmin']);
    });

    grunt.registerTask('img', function () {
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');

        grunt.task.run(['clean:img', 'copy:img']);
    });

    grunt.registerTask('font', function () {
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');

        grunt.task.run(['clean:fonts', 'copy:fonts']);
    });

    // To execute

    grunt.registerTask('default', ['css', 'js', 'font', 'img']);

    grunt.registerTask('dev', ['css', 'js']);

    grunt.registerTask('build', function () {
        grunt.loadNpmTasks('grunt-replace');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.config.data.distpath = './dist/';

        grunt.task.run(['css', 'cssBuild', 'js', 'jsBuild', 'img', 'font', 'copy:index', 'replace:buildHash']);
    });
};