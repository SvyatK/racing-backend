var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var schema = new Schema({
    login:{type:String, required:true, unique:true},
    password:{type:String, required:true}
   // cars:[{type:Schema.Types.ObjectId, ref:'Cars'}]

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User',schema);
