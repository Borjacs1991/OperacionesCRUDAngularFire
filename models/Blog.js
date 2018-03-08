var mongoose = require('mongoose');
var BlogSchema = new mongoose.Schema({
   // id: int,
    titulo: String,
    fecha: String,
    descripcion: String,
    foto: String,
   // updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Blog', BlogSchema);