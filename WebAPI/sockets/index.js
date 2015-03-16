// sockets/index.js
(function (socket) {
    
    var socketio = require("socket.io");
    
    socket.init = function (server) {
        var io = socketio.listen(server);
        
        io.sockets.on("connection", function (sck) {
            
            console.log("socket was connected");
            
            sck.on("join notification", function (channel) {
                sck.join(channel);
            });
            
            sck.on("newCompany", function (data) {
                sck.broadcast.to(data.channel).emit("broadcast data", data.data);
            });

        });
    };

})(module.exports);