
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
        client.on('readyToStart', function(data){
            var item = {id:data.id, coordinates:startCoordinates[clientCount]};
            items.push(item);
            clientCount++;
            //if(clientCount == 2){
                nextStep();
            //}
        })

        client.on('nextStep', function(data){
            clientsReady++
            for (i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.id == data.id) {
                    items[i] = data;
                }
            }
            if(clientsReady == clientCount){
                nextStep();
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

function nextStep(){
    clientsReady = 0;
    clearTimeout(timeout);
    updateData();
    startTimeout();
}

function startTimeout(){
    timeout = setTimeout(nextStep,5000);
}

function updateData(){
    io.emit('stepComplete', items);
    io.broadcast.emit('stepComplete', items);
}

module.exports = setSocket;




