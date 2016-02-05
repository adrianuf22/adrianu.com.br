module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	
		, sass: {
			dist: {
				files: [{
					expand: true
					, cwd: 'assets/scss'
					, src: ['*.scss']
					, dest: 'assets/css'
					, ext: '.css'
				}]
			}
		}

		, cssmin: {
			target: {
				files: {
					'build/assets/css/style.min.css': ['assets/css/reset.css','assets/css/style.css']
				}
			}
		}

		, uglify: {
			dist: {
				files: {
					'build/assets/js/app.min.js': ['assets/js/body.control.js', 'assets/js/hammer.min.js']
				}
			}
		}

		, watch: {
			dev: {
				files: ['assets/scss/*.scss']
				, tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['sass']);
};