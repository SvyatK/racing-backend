var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var schema = new Schema({
    name:{type:String, required:true},
    image:{type:String},
    max_acceleration:{type:Number},
    max_deceleration:{type:Number},
    steering:{type:Number}
    //user:[{type:Schema.Types.ObjectId, ref:'User'}]
});

module.exports = mongoose.model('Car',schema);
