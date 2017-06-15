var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        login: req.body.login,
        password: bcrypt.hashSync(req.body.password,2)
    });
    user.save(function (err,result) {
        if(err){
            return res.status(500).json({
                title:'An error occured during user saving',
                error:err
            });
        }
        res.status(201).json({
            message:'User created',
            obj:result
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({login:req.body.login}, function (err, user) {
        if(err){
            return res.status(500).json({
                title:'An error occured during signin',
                error:err
            });
        }
        if(!user){
            return res.status(401).json({
                title:'Login failed',
                error:{message:'invalid credentials'}
            });
        }
        if(!bcrypt.compare(req.body.password,user.password)){
            return res.status(401).json({
                title:'Login failed',
                error:{message:'invalid credentials'}
            });
        }

        var token = jwt.sign({user:user},'secret-key',{expires:3600});
        res.status(200).json({
            message:'Logged in',
            token:token,
            userId:user._id
        });
    });
});

module.exports = router;
