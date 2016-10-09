module.exports = function(grunt) {
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
																								, dest: '<%= distpath %>webroot/css/'
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
																								, cwd: '<%= distpath %>webroot/css/'
																								, src: ['**/*.css']
																								, dest: '<%= distpath %>webroot/css/'
																				}
																]
												}
								}
								
								, concat: {
												app: {
																src:  ['src/assets/js/body.control.js']
																, dest: '<%= distpath %>webroot/js/app.js'
												}
												, third: {
																src: ['src/assets/js/third/hammer.min.js']
																, dest: '<%= distpath %>webroot/js/third.js'
												}
								}
								
								, uglify: {
												dist: {
																files: [
																				{
																								expand: true
																								, cwd: '<%= distpath %>webroot/js/'
																								, src: '**/*.js'
																								, dest: '<%= distpath %>webroot/js/'
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
																								, dest: '<%= distpath %>webroot/images/'
																				}
																]
												}
												, fonts: {
																files: [
																				{
																								expand: true
																								, cwd: 'src/assets/fonts/'
																								, src: ['**/*']
																								, dest: '<%=distpath %>webroot/fonts/'
																				}
																]
												}
								}
								
								, clean: {
												css: ['<%= distpath %>webroot/css']
												, img: ['<%= distpath %>webroot/images']
												, fonts: ['<%= distpath %>webroot/fonts']
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
								grunt.loadNpmTasks('grunt-contrib-sass');
								
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
				
				grunt.registerTask('default', ['css','js','font', 'img']);
				
				grunt.registerTask('dev', ['css','js']);
				
				grunt.registerTask('build', function () {
								grunt.loadNpmTasks('grunt-contrib-copy');
								grunt.config.data.distpath = './dist/';
								
								grunt.task.run(['css','cssBuild','js','jsBuild','img','font','copy:index']);
				});
};