/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
// var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('bower_components/jquery-steps/build/jquery.steps.js')
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  })
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
  })

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map',{
    destDir: 'assets'
  });

  app.import('bower_components/admin-lte/dist/css/AdminLTE.css')
  app.import('bower_components/admin-lte/dist/js/app.js')
  app.import('bower_components/admin-lte/dist/css/skins/skin-red.css')

  return app.toTree();
};
