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

        eslint: {
            target: ['build/shapes.js']
            //quiet: true
        },

        watch: {
            css: {
                files: ['src/css/**/*.*'],
                tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },

            scripts: {
                files: ['src/js/**/*.*'],
                tasks: ['concat', 'uglify', 'eslint'],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['index.html'],
                options: {
                    livereload: true
                }
            }
        },

        hash_files: {
            options: {
                algorithm: 'md5',
                numChars: 7,
                token: '\<hash\>'
            },
            files: {
                'build/<token>/': ['src/testing', 'src/123'],
            }
        },

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
    grunt.loadNpmTasks('grunt-hash-files');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'eslint', 'clean', 'connect:server', 'watch']);
};