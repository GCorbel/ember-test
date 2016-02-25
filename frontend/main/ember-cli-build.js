/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
// var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});

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

  app.import('./bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css')
  app.import('./bower_components/bootstrap-material-design/dist/css/ripples.css')
  app.import('./bower_components/bootstrap-material-design/dist/js/material.js')
  app.import('./bower_components/bootstrap-material-design/dist/js/ripples.js')

  app.import('./vendor/js/bootstrap-material-datetimepicker.js')
  app.import('./vendor/css/bootstrap-material-datetimepicker.css')
  app.import('./vendor/font/Material-Design-Icons.eot')

  return app.toTree();
};
