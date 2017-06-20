
var io;

var items = [];

var roomCount = 0;

var setSocket = function (data) {

    this.update = function update(itemData){
        this.updateData(itemData);
    }

    this.updateData = function updateData(itemData){
       /* var itemsToSend = [];
        for (var i = 0; i < this.items.length; i++) {
            var currentContainer = this.items[i];
            if(currentContainer.roomId == itemData.roomId){
                itemsToSend.push(currentContainer.item);
            }
        }
        if(itemsToSend.length == 2){
            io.sockets.in(itemData.roomId.toString()).emit('stepComplete', itemsToSend);
        }*/
    }

    io = data;
    console.log(data);
    io.on('connection', function(client) {
        client.on('readyToStart', function(data) {
            /*if (!this.items) {
                this.items = [];
            }*/
          /*  if (!this.roomCount) {
                this.roomCount = 0;
            }*/
            //client.join(this.roomCount.toString());

         /*   if (!this.startCoordinates) {
                this.startCoordinates = [{x:3104, y:2287, rot:-1.49},{x:3175, y:2292, rot:-1.49}];
            }
            var item = {
                id:data.id,
                x:this.startCoordinates[this.clientCount].x,
                y:this.startCoordinates[this.clientCount].y,
                rotation:this.startCoordinates[this.clientCount].rot
            };*/
        /*    var container = {
                roomId: this.roomCount,
                item: item,
                ready: false
            }*/
            //this.items.push(container);
            /*if(this.items.length%2==0){
                this.update(container);
                this.roomCount++;
            }*/
        }.bind(this));

        client.on('nextStep', function(data) {
            var clientsReady = 0;
            var currentContainer;

           /* //replace item data
            for (var i = 0; i < this.items.length; i++) {
                var container = this.items[i];
                if(data.id == container.item.id){
                    container.item = data;
                    container.ready = true;
                    currentContainer = container;
                }
            }

            //get ready items
            for (var i = 0; i < this.items.length; i++) {
                var readyContainer = this.items[i];
               if(readyContainer.roomId == currentContainer.roomId){
                   if(readyContainer.ready){
                       clientsReady++;
                       readyContainer.ready = false;
                   }
               }
            }*/

            /*if (clientsReady == 2){
                this.update(currentContainer);
            }*/

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
            //TODO: implement disconnect
        });
    }.bind(this));
}

module.exports = setSocket;




