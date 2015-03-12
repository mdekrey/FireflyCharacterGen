// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "wwwroot/Scripts",
					layout: "byComponent"
				}
			}
		},

		uglify: {
			my_target: {
				files: { 'wwwroot/Scripts/app.min.js': ['wwwroot/Scripts/app.js'] }
			}
		},

		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'Assets/Content/', src: ['*'], dest: 'wwwroot/Content/', filter: 'isFile' },
				]
			}
		},

		typescript: {
			base: {
				src: ['Assets/**/*.ts'],
				dest: 'wwwroot/Scripts/app.js',
				options: {
					module: 'amd',
					sourceMap: true,
					target: 'es5'
				}
			}
		},

		watch: {
			typescripts: {
				files: ['Assets/**/*.ts'],
				tasks: ['buildScripts']
			}
		}
	});

	// This command registers the default task which will install bower packages into wwwroot/lib
	grunt.registerTask("buildScripts", ['typescript', 'uglify']);
	grunt.registerTask("default", ["bower:install", 'watch']);

	// The following line loads the grunt plugins.
	// This line needs to be at the end of this this file.
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-typescript");

};
