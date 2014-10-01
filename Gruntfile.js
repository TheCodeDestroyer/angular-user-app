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
                        $: true,
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
        uglify: {
            app: {
                files: {
                    'app/js/build/appBundle.min.js': ['app/js/**/**.js', '!app/js/build/**.js']

                }
            },
            vendor: {
                files: {
                    'app/js/build/vendorBundle.min.js': [
                        'app/lib/angular/angular.js',
                        'app/lib/ui-router/release/angular-ui-router.js',
                        'app/lib/angular-cookies/angular-cookies.js',
                        'app/lib/angular-bootstrap/ui-bootstrap.js',
                        'app/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                        'app/lib/jquery/dist/jquery.js',
                        'app/lib/jquery-ui/jquery-ui.js',
                        'app/lib/highcharts/highcharts.js',
                        'app/lib/highcharts-ng/dist/highcharts-ng.js',
                        'app/lib/jqgrid/js/i18n/grid.locale-en.js',
                        'app/lib/jqgrid/js/jquery.jqGrid.js'
                    ]
                }
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

    grunt.registerTask('build', ['sass', 'uglify']);

};