/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var artnet = require("artnet-node").Client;
var client = artnet.createClient('192.168.12.111', 6454);
// Setup server
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
io.on('connection', function(socket){
  	socket.on('color', function(msg){
	    console.log('color: ' + msg);
		client.send(msg);
	  });
});


// Expose app
exports = module.exports = app;