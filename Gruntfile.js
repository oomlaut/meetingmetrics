module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var basePath = {
        bower: 'bower_components',
        styles: 'public/styles/src',
        scripts: 'public/scripts/src'
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options: {
                paths: [basePath.styles, basePath.bower + '/bootstrap/less']
            },
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: basePath.styles + '/../main.map'
                },
                files: {
                    'public/styles/main.min.css': [basePath.styles + '/main.less']
                }
            },
            dist: {
                options:{
                    compress: true,
                    cleancss: true,
                },
                files: {
                    'public/styles/main.min.css': [basePath.styles + '/main.less']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    basePath.scripts + '/plugins.js',
                    basePath.scripts + '/main.js'
                ],
                dest: basePath.scripts + '/../main.concat.js'
            }
        },
        uglify: {
            options: {},
            dist:{
                files: {
                    'public/scripts/main.min.js': ['public/scripts/main.concat.js']
                }
            }
        },
        watch: {
            styles: {
                files: [basePath.styles + '/**/*.less'],
                tasks: ['less:dev'],
                options: {
                    debounceDelay:500
                }
            },
            scripts: {
                files: [basePath.scripts + '/**/*.js'],
                tasks: ['build-js'],
                options: {
                    debounceDelay:500
                }
            }
        }
    });

    grunt.registerTask('default', ['dev', 'watch']);
    grunt.registerTask('build-js', ['concat:dist', 'uglify:dist']);
    grunt.registerTask('dev', ['build-js', 'less:dev']);
    grunt.registerTask('dist', ['build-js', 'less:dist']);

    grunt.registerTask('heroku:development', ['dev']);
    grunt.registerTask('heroku:production', ['dist']);

};
