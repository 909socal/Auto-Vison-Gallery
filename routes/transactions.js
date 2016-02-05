'use strict';

var express = require('express');
var router = express.Router();
var Image = require('../models/image');


router.get('/', function(req, res, next) {
  Image.find({}, function(err, images){
  res.send(images);
  });
});


router.delete('/:itemId', function(req, res, next) {
  Image.findById(req.params.itemId, function(err, image){
  	image.remove(function(err){
  		if(!err) console.log('item removed successfully');
  		res.status(err ? 400:200).send(err||null);
  	});
  });
});


router.put('/:itemId', function(req, res, next) {
  var updatedImageObject = req.body; 
  Image.findById(req.params.itemId, function(err, image){
  	image.model = updatedImageObject.model;
  	image.make = updatedImageObject.make;
  	image.year = updatedImageObject.year; 
  	image.price = updatedImageObject.price;
  	image.save(function(err, savedImage){
  		res.status(err ? 400:200).send(err||savedImage);
  	});
  });
});

module.exports = router;
