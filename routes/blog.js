var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = require('../models/Blog.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
    console.log("se mete");
    Blog.find(function (err, products) {
        console.log(err);
      if (err) return next(err);
      console.log(products);
      res.json(products)
    });
  });

module.exports = router;