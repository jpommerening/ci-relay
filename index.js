var ci = require('ci-adapter');
var router = require('ci-router');
var connect = require('connect');
var app = module.exports = connect();

var types = {
  'buildbot': ci.Buildbot,
  'jenkins': ci.Jenkins,
  'travis': ci.Travis
};

app.config = function (config) {
  var app = this;

  config.routes.forEach(function (route) {
    var adapters = route.adapters.map(function (options) {
      console.log('Connecting to ' + options.type + ' instance at ' + options.url);
      return types[options.type](options.url, options.options);
    });
    var combined = adapters.length > 1 ? ci.combine.apply(null, adapters) : adapters[0];
    var cached = ci.cache(combined, config.cache)

    app.use(route.route, router(cached));
  });

  return this;
};
