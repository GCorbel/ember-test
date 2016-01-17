/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    exportApplicationGlobal: true,
    modulePrefix: 'tiny',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'self' https://checkout.stripe.com",
      'script-src': "'self' https://cdn.mxpnl.com https://checkout.stripe.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://localhost:3001 http://localhost:5000 http://192.203.9.104:5000", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' https://q.stripe.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = (process.env.API_HOST || 'http://localhost:5000')
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = (process.env.API_HOST || 'http://159.203.9.104:5000')
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  ENV.stripe = {
    key: "pk_test_sQlqVzfDGPAeGYhYcxWKga2D"
  };

  return ENV;
};
