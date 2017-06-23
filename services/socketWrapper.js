
var io;

var items = [];

var roomCount = 0;

var startCoordinates = startCoordinates = [{x:3104, y:2287, rot:-1.49},{x:3175, y:2292, rot:-1.49}];

var setSocket = function (data) {

    this.update = function update(itemData){
        this.updateData(itemData);
    }

    this.updateData = function updateData(itemData){
        var itemsToSend = [];
        for (var i = 0; i < this.items.length; i++) {
            var currentContainer = this.items[i];
            if(currentContainer.roomId == itemData.roomId){
                itemsToSend.push(currentContainer.item);
            }
        }
        if(itemsToSend.length >= 2){
            io.sockets.in(itemData.roomId.toString()).emit('stepComplete', itemsToSend);
        }
    }

    io = data;
    console.log(data);
    io.on('connection', function(client) {
        client.on('readyToStart', function(data) {
            if (!this.items) {
                this.items = [];
            }
            if (!this.roomCount) {
                this.roomCount = 0;
            }
            client.join(this.roomCount.toString());

            if (!this.startCoordinates) {
                this.startCoordinates = [{x:3104, y:2287, rot:-1.49},{x:3175, y:2292, rot:-1.49}];
            }
            var item = {
                id:data.id,
                x:this.startCoordinates[this.items.length%2==0?0:1].x,
                y:this.startCoordinates[this.items.length%2?0:1].y,
                rotation:this.startCoordinates[this.items.length%2?0:1].rot,
                name: data.name
            };
            var container = {
                roomId: this.roomCount,
                item: item,
                ready: false,
                finished: false
            }
            this.items.push(container);
            if(this.items.length%2==0){
                this.update(container);
                this.roomCount++;
            }
        }.bind(this));

        client.on('nextStep', function(data) {
            var clientsReady = 0;
            var currentContainer;

            io.emit('onTest', data);
            //replace item data
            for (var i = 0; i < this.items.length; i++) {
                var container = this.items[i];
                if(data.id == container.item.id){
                    this.items[i].item = data;
                    this.items[i].ready = true;
                    currentContainer = container;
                }
            }
            io.emit('onTest', currentContainer);

            //get ready items
            for (var j = 0; j < this.items.length; j++) {
                var readyContainer = this.items[j];
                io.emit('onTest', readyContainer);
               if(readyContainer.roomId == currentContainer.roomId && readyContainer.ready){
                   clientsReady++;
               }
            }
            io.emit('onTest', clientsReady);

            if (clientsReady >= 2){
                //setting ready false
                for (var k = 0; k < this.items.length; k++) {
                    var readyContainer = this.items[k];
                    if (readyContainer.roomId == currentContainer.roomId) {
                        readyContainer.ready = false
                    }
                }

                this.update(currentContainer);
            }

        }.bind(this));

        client.on('finished', function(data) {
            var currentRoom;
            for (var i = 0; i < this.items.length; i++) {
                var currentContainer = this.items[i];
                if(currentContainer.item.id == data.id){
                    currentRoom = currentContainer.roomId;
                }
            }
            io.sockets.in(currentRoom.toString()).emit('raceFinished', data.id);

        }.bind(this));
        client.on('disconnect', function(id){
            //TODO: implement disconnect
        });
    }.bind(this));
}

module.exports = setSocket;




