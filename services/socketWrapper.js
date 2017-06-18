
var io;

var clientCount=0;

var clientsReady=0;

var timeout;

var items = [];

var startCoordinates = [{x:3104, y:2287, rot:-1.49},{x:3175, y:2292, rot:-1.49}]

var setSocket = function (data) {
    io = data;
    console.log(data);
    io.on('connection', function(client){
        //client.join('room1');
        client.on('readyToStart', function(data){
            var item = {id:data.id, coordinates:startCoordinates[this.clientCount]};
            items.push(item);
            this.clientCount++;
            if(this.clientCount >= 2){
                nextStep(client);
            }
         /*   if(clientCount>2){
                clientCount = 0;
                items = [];
            }*/
        })

        client.on('nextStep', function(data){
            this.clientsReady++
            for (i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.id == data.id) {
                    items[i] = data;
                }
            }
            if(this.clientsReady == 2){
                nextStep(client);
            }

        });
        client.on('disconnect', function(id){
            clientCount--;
            for (i = 0; i < items.length; i++) {
                var item = items[i];
                if(item.id == id){
                    items.slice(i,1);
                    break;
                }
            }
        });
    });
}

function nextStep(socket){
    clientsReady = 0;
    //clearTimeout(timeout);
    updateData(socket);
    //startTimeout();
}

function startTimeout(){
   // timeout = setTimeout(nextStep,5000);
}

function updateData(socket){
    //var rooms = Objects.keys(socket.rooms);
    //console.log(rooms); // [ <socket.id>, 'room 237' ]
    //var room = io.sockets.manager.roomClients[socket.id];
    //console.log(room);
    io.emit('stepComplete', items);
    //io.broadcast.emit('stepComplete', items);
}

module.exports = setSocket;




