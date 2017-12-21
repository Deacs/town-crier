var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');

server.listen(8890);
io.on('connection', function (socket) {

    console.log("new client connected");
    var redisClient = redis.createClient();
    redisClient.subscribe('message');

    redisClient.on("message", function(channel, message) {
        console.log("new message in queue "+ message + "channel");
        socket.emit(channel, message);
    });

    socket.on('disconnect', function() {
        console.log('Disconnecting Client');
        redisClient.quit();
    });

});


//var redis = require("redis");
//var sub = redis.createClient(), pub = redis.createClient();
//var msg_count = 0;
//
//sub.on("subscribe", function (channel, count) {
//    pub.publish("a nice channel", "I am sending a message.");
//    pub.publish("a nice channel", "I am sending a second message.");
//    pub.publish("a nice channel", "I am sending my last message.");
//});
//
//sub.on("message", function (channel, message) {
//    console.log("sub channel " + channel + ": " + message);
//    msg_count += 1;
//    if (msg_count === 3) {
//        sub.unsubscribe();
//        sub.quit();
//        pub.quit();
//    }
//});
//
//sub.subscribe("a nice channel");
