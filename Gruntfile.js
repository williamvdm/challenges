/**
 * Created by My PEAQ on 30-8-2017.
 */
'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: ['assets/sass/style.scss'],
            tasks: ['sass']
        },
        sass: {

            dist: {
                files: {
                    'assets/css/style.css' : 'assets/sass/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);

};