module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 2000,
                    base: ''
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'src/js/**/*.js'
                ],
                dest: 'build/shapes.js'
            }
        },

        uglify: {
            build: {
                src: 'build/shapes.js',
                dest: 'build/shapes.min.js'
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/shapes.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'src/css/shapes.css'
                    ]
                }
            }
        },

        cachebust: {
            task: {
                options: {
                    assets: ['build/**']
                },
                src: ['index.html']
            }
        },

        eslint: {
            target: ['build/shapes.js']
            //quiet: true
        },

        watch: {
            css: {
                files: ['src/css/**/*.*'],
                tasks: ['cssmin', /*'bustCache'*/],
                options: {
                    livereload: true
                }
            },

            scripts: {
                files: ['src/js/**/*.*'],
                tasks: ['concat', 'uglify', 'eslint', /*'bustCache'*/],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['index.html', /*'bustCache'*/],
                options: {
                    livereload: true
                }
            }
        },

        //bustCache: {
        //    build: {
        //        options: {
        //            hashType: "timestamp",
        //            css: true,
        //            javascript: true
        //        },
        //        src: "index.html"
        //    }
        //},

        clean: {
            build: ['build/shapes.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-bust-cache');

    grunt.registerTask('default',
        ['concat',
            'uglify',
            'cssmin',
            'eslint',
            'clean',
            /*'bustCache'*/,
            'connect:server',
            'watch']
    );
};