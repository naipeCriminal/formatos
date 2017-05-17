module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'index.html': 'layout.jade'
        }
      }
    },
  watch: { 
    scripts: { 
      files: ['*.jade'],
      tasks: ['jade'],
      options: {
        spawn: false,
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.registerTask('default',['watch']);
};