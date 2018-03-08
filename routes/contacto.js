var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contacto = require('../models/Contacto.js');

/* SAVE BOOK */
router.post('/', function(req, res, next) {
    Contacto.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
module.exports = router;