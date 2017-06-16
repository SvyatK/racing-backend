var express = require('express');
var router = express.Router();
var Car = require('../models/car');

router.get('/', function (req, res, next) {
 /*   var car = new Car({
        name: "Ford Focus RS",
        image: "http://i.infocar.ua/i/1/4596/300x198.jpg",
        max_acceleration:1.8,
        max_deceleration:0.6,
        steering:9
    });
    car.save();
    var car = new Car({
        name: "Volkswagen Golf R",
        image: "http://i.infocar.ua/i/1/5095/300x198.jpg",
        max_acceleration:1.81,
        max_deceleration:0.63,
        steering:8.5
    });
    car.save();
    var car = new Car({
        name: "KIA Ceed",
        image: "http://i.infocar.ua/i/1/4652/300x198.jpg",
        max_acceleration:1.6,
        max_deceleration:0.78,
        steering:6
    });
    car.save();
  var car = new Car({
  name: "Ford Fiesta",
  image: "http://i.infocar.ua/i/1/2502/300x198.jpg",
  max_acceleration:1.62,
  max_deceleration:0.8,
  steering:7.5
  });
  car.save();
  var car = new Car({
  name: "Lexus RX 350",
  image: "http://i.infocar.ua/i/1/4617/300x198.jpg",
  max_acceleration:1.69,
  max_deceleration:0.7,
  steering:5
  });
  car.save();
  var car = new Car({
  name: "Ford Focus Wagon",
  image: "http://i.infocar.ua/i/1/390/300x198.jpg",
  max_acceleration:1.55,
  max_deceleration:0.8,
  steering:5.5
  });
  car.save();*/
    Car.find().exec(function (err, cars) {
        if(err){
            return res.status(500).json({
                title:'An error occured during getting cars',
                error:err
            });
        }
        res.status(200).json({
            message:'Success',
            obj:cars
        });
    })
});

module.exports = router;