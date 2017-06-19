
var io;

var clientCount=0;

var clientsReady=0;

var timeout;

var items = [];

var gameRooms = [];

var setSocket = function (data) {

    this.update = function update(itemData){
        clientsReady = 0;
        //clearTimeout(timeout);
        this.updateData(itemData);
        //startTimeout();
    }

    this.updateData = function updateData(itemData){
        //var rooms = Objects.keys(socket.rooms);
        //console.log(rooms); // [ <socket.id>, 'room 237' ]
        //console.log(room);
        for (var i = 0; i < this.gameRooms.length; i++) {
            var roomItems = this.gameRooms[i];
            for (var j = 0; j < roomItems.length; j++) {
                var item = roomItems[j];
                if(item.id == itemData.id){
                    io.sockets.in(i.toString()).emit('stepComplete', roomItems);
                }
            }
        }

        //io.broadcast.emit('stepComplete', items);
    }

    io = data;
    console.log(data);
    io.on('connection', function(client) {
        client.on('readyToStart', function(data) {
            if (!this.items) {
                this.items = [];
            }
            if (!this.gameRooms) {
                this.gameRooms = [];
            }
            client.join(this.gameRooms.length.toString());
            if(this.items.length==0){
                this.gameRooms.push(this.items);
            }
            if (!this.clientCount) {
                this.clientCount = 0;
            }
            if (!this.startCoordinates) {
                this.startCoordinates = [{x:3104, y:2287, rot:-1.49},{x:3175, y:2292, rot:-1.49}];
            }
            var item = {
                id:data.id,
                x:this.startCoordinates[this.clientCount].x,
                y:this.startCoordinates[this.clientCount].y,
                rotation:this.startCoordinates[this.clientCount].rot
            };
            this.items.push(item);
            if(this.items.length==2){
                this.items = [];
            }
            this.clientCount++;
            if (this.clientCount >= 2){
                this.update(item);
            }
         /*   if(clientCount>2){
                clientCount = 0;
                items = [];
            }*/
        }.bind(this));

        client.on('nextStep', function(data) {
            if (!this.clientsReady) {
                this.clientsReady = 0;
            }
            this.clientsReady++;
            var currentItem;
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item.id == data.id) {
                    this.items[i] = data;
                    currentItem = data;
                }
            }
            if (this.clientsReady == 2){
                this.update(currentItem);
                this.clientsReady = 0;
            }

        }.bind(this));

        client.on('finished', function(data) {
            if (!this.clientsFinished) {
                this.clientsFinished = 0;
            }
            this.clientsFinished++;
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item.id == data.id) {
                    this.items[i].result = data.stepsCount;
                }
            }
            if (this.clientsFinished == 2) {
                io.emit('raceFinished', this.items[0].result < this.items[1].result ? this.items[0].id : this.items[1].id);
            } else {
                this.update(client);
            }

        }.bind(this));
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
    }.bind(this));
}

function startTimeout(){
   // timeout = setTimeout(nextStep,5000);
}

module.exports = setSocket;




