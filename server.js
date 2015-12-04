var express = require('express');
var app = express();

var config = require('./config.json');

var ci = require('ci-adapter');
var router = require('ci-router');

var types = {
  'buildbot': ci.Buildbot,
  'jenkins': ci.Jenkins,
  'travis': ci.Travis
};

config.routes.forEach(function (route) {
  var adapters = route.adapters.map(function (options) {
    console.log('Connecting to ' + options.type + ' instance at ' + options.url);
    return types[options.type](options.url, options.options);
  });
  var combined = adapters.length > 1 ? ci.combine.apply(null, adapters) : adapters[0];
  var cached = ci.cache(combined, config.cache);

  app.use(route.route, router.default(cached));
});

var server = app.listen(config.port, function() {
  var address = server.address();
  var host = address.address;
  var port = address.port;

  console.log('Listening at http://%s:%s', host, port);
});

