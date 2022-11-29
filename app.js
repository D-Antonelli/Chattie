const express = require("express");
const app = express();
const path = require('path')
var WebSocketServer = require('ws')
var http = require('http');

// create a chatbot using websockets
const port = 3000;

    var server = http.createServer(app);

    const wss = new WebSocketServer.Server({server: server});
    
    wss.on('connection', function connection(ws) {
        console.log("A new client connected")
        ws.send("Welcome!")
        ws.on('message', function incoming(message) {
            console.log("received " + message)
            ws.send("Whazzup!")
        })
    })

    // Serve js files
    app.use('/js', express.static(path.join(__dirname, 'ui/js/')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+'/ui/html/index.html'))
    })

    server.listen(port, function() {
        console.log((new Date()) + ' Server is listening on port ' + port);
    });

