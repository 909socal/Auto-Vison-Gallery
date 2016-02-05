'use strict'

var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	albumOwner: {type: mongoose.Schema.Types.ObjectId, ref:"Album", required: true},
	pic: {type:String, require:true}
});

var Image = mongoose.model('Image', imageSchema);


module.exports = Image; 

