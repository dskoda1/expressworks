
/* Hello world 
var express = require('express');
var app = express();
app.get('/home', function(req, res){
  res.end('Hello World!');
})
app.listen(process.argv[2]);
*/

/* Static 

var express = require('express');
var app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);
*/
 
 
/* Jade 
//node server.js 8080 ./expressworks/exercises/jade/templates
//http://node-express-tutorial-dskoda1.c9users.io:8080/home
var express = require('express');
var app = express();

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res){
  
  res.render('index.jade', {date: new Date().toDateString()});
})

app.listen(process.argv[2]);
 */
 
/* Good old form 
var express = require('express');
var app = express();
var bp = require('body-parser');
app.use(bp.urlencoded({extended: false}));
app.post('/form', function(req, res){
  var ans = (req.body.str.split('').reverse().join(''));
  res.end(ans);
  
});
app.listen(process.argv[2]);
*/ 

/* Stylish CSS 
var express = require('express');
var app = express();
//Set middleware
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname , 'public')));

app.listen(process.argv[2]);

*/

/* Param pam pam 
var express = require('express');
var app = express();

app.put('/message/:id', function(req, res){
  var id = req.params.id;
  var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex');
  res.send(str);
  
});
app.listen(process.argv[2]);
*/

/* Whats in query 

var express = require('express');
var app = express();

app.get('/search', function(req, res){

  res.send(req.query);
  
});

app.listen(process.argv[2]);
*/

var express = require('express');
var app = express();
var fs = require('fs')
app.get('/books', function(req, res){
  console.log("in books");
  fs.readFile(process.argv[3], function(err, data){
    if(!err){
      res.json(JSON.parse(data));
    }
    else{
      res.send(err);
    }
  })
  
  
});

app.listen(process.argv[2]);











// //
// // # SimpleServer
// //
// // A simple chat server using Socket.IO, Express, and Async.
// //
// var http = require('http');
// var path = require('path');

// var async = require('async');
// var socketio = require('socket.io');
// var express = require('express');

// //
// // ## SimpleServer `SimpleServer(obj)`
// //
// // Creates a new instance of SimpleServer with the following options:
// //  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
// //
// var router = express();
// var server = http.createServer(router);
// var io = socketio.listen(server);

// router.use(express.static(path.resolve(__dirname, 'client')));
// var messages = [];
// var sockets = [];

// io.on('connection', function (socket) {
//     messages.forEach(function (data) {
//       socket.emit('message', data);
//     });

//     sockets.push(socket);

//     socket.on('disconnect', function () {
//       sockets.splice(sockets.indexOf(socket), 1);
//       updateRoster();
//     });

//     socket.on('message', function (msg) {
//       var text = String(msg || '');

//       if (!text)
//         return;

//       socket.get('name', function (err, name) {
//         var data = {
//           name: name,
//           text: text
//         };

//         broadcast('message', data);
//         messages.push(data);
//       });
//     });

//     socket.on('identify', function (name) {
//       socket.set('name', String(name || 'Anonymous'), function (err) {
//         updateRoster();
//       });
//     });
//   });

// function updateRoster() {
//   async.map(
//     sockets,
//     function (socket, callback) {
//       socket.get('name', callback);
//     },
//     function (err, names) {
//       broadcast('roster', names);
//     }
//   );
// }

// function broadcast(event, data) {
//   sockets.forEach(function (socket) {
//     socket.emit(event, data);
//   });
// }

// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Chat server listening at", addr.address + ":" + addr.port);
// });
