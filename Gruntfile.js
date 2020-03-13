module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            release:{
              files: {
                './dist/register.min.js': 'register.js'
              }
            }       
        },
        cssmin: {  
            './dist/register.min.css': 'register.css'
        },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'register.html',
              dest: './dist/index.html'
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
   
    grunt.registerTask('default',['htmlmin']);
};