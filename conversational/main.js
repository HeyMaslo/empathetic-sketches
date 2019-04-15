'use strict';

// ┌────────────────────────────────────────────────────────────────────┐
// | Filename: main.js
// └────────────────────────────────────────────────────────────────────┘

// ┌────────────────────────────────────────────────────────────────────┐
// | Require modules
// └────────────────────────────────────────────────────────────────────┘
var browserify = require('browserify-middleware');
var stringify = require('stringify');
var figlet = require('figlet');
var express = require("express");
var stylus = require('stylus');
var nib = require('nib');
var fs = require('fs');
var pckg = require('./package.json');
var pug = require('pug');
//var midi = require('midi');

var WebSocket = require("ws");
var http = require('http');

// ┌────────────────────────────────────────────────────────────────────┐
// | Initialize vars + constants
// └────────────────────────────────────────────────────────────────────┘
var app = express();
var port = Number( process.env.PORT || 80 );

// ┌────────────────────────────────────────────────────────────────────┐
// | App setup
// └────────────────────────────────────────────────────────────────────┘

browserify.settings({ transform: [stringify(['.svg', '.glsl', '.vs', '.fs'])]});

app.set('views', __dirname + '/app/views');
app.use('/js', browserify('./app/js'));
app.set('view engine', 'pug');
app.use('/*.css', function(req, res){
	var reqUrl = req.originalUrl.split('/');
	var file = reqUrl[reqUrl.length-1].slice(0, -4);
	res.set('Content-Type', 'text/css').send( stylus.render( fs.readFileSync(__dirname + '/app/css/' + file + '.styl', 'utf-8') )); 
});

app.use(express.static(__dirname + '/app'));

// ┌────────────────────────────────────────────────────────────────────┐
// | Routes
// └────────────────────────────────────────────────────────────────────┘

app.get('/', function(req, res){
	var midi = '';
	for( var i = 0 ; i < process.argv.length ; i++ ) if( process.argv[i] == 'midi' ) midi = 'midi';

	res.render( 'main', { midi: midi } );
});

app.get('/page', function(req, res){
	res.render( 'page' );
})

var socket;
var wss = new WebSocket.Server({ port: 8081 }); 
wss.on('connection', function connection(ws) {
 	socket = ws;
});


for( var i = 0 ; i < process.argv.length ; i++ ){
	console.log(process.argv[i])
	if( process.argv[i] == 'midi' ){
		var m = new midi.input();
		m.openPort(0);
		m.on('message', function(deltaTime, message) { if( socket ) socket.send( message.toString() ); });
	}
}

// ┌────────────────────────────────────────────────────────────────────┐
// | Init!!
// └────────────────────────────────────────────────────────────────────┘

app.listen(port);

figlet.fonts(function(err, fonts) {
	var font = fonts[Math.floor(Math.random() * fonts.length)];
	figlet(pckg.name, { font : font},function(err, data) {
		console.log(data);
		console.log('└─────> ' + pckg.description);
		console.log('└─────> v ' + pckg.version);
		console.log('└─────> Listening on port: ' + port);
	});
});