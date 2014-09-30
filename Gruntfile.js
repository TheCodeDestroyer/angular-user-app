module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: ['Gruntfile.js',
                    'app/js/**/*.js'
                ],
                options: {
                    bitwise: true,
                    camelcase: true,
                    curly: true,
                    quotmark: 'single',
                    regexp: true,
                    undef: true,
                    unused: true,
                    eqeqeq: true,
                    eqnull: true,
                    browser: true,
                    globals: {
                        jQuery: true,
                        angular: true,
                        module: true
                    }
                }
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js',
                    'www/js/**/*.js'
                ],
                tasks: ['jshint']
            },
            css: {
                files: '**/*.sass',
                tasks: ['sass']
            }
        },
        ngannotate: {
            controllers: {
                src: ['test/src/controllers/one.js'],
                dest: 'test/generated/controllers/one.js'
            },
            directives: {
                expand: true,
                cwd: 'test/src',
                src: ['directives/**/*.js'],
                dest: 'test/generated'
            }
        },
        sass: {
            dist: {
                files: {
                    'app/css/bootstrap.css': 'app/css/bootstrap/bootstrap.scss'
                }

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-ng-annotate');

};