var app = require('./index');
var config = require('./config.json');

var port = config.port || process.env.PORT || 3100;
var host = config.host || process.env.HOST || null;

function callback() {
  var address = server.address();
  var host = address.address;
  var port = address.port;
  console.log('Listening at http://%s:%s', host, port);
}

var server = app.config(config)
                .listen(port, host, callback);
