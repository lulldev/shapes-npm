module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/js/**/*.js'
                ],
                dest: '.build/shapes.js'
            }
        },

        uglify: {
            build: {
                src: '.build/shapes.js',
                dest: '.build/shapes.min.js'
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '.build/shapes.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'src/css/shapes.css'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};