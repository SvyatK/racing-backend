
var io;

var clientCount;

var setSocket = function (data) {
    io = data;
    io.on('connection', function(client){
        clientCount++;
        client.on('nextStep', function(data){

        });
        client.on('disconnect', function(){
            clientCount--;
        });
    });

    io.emit('stepComplete', {x:0,y:0,rotation:90});
}

module.exports = setSocket;




