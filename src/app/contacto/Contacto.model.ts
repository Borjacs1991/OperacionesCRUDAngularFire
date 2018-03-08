//var mongoose = require('mongoose');
//var ContactoSchema = new mongoose.Schema({
   // id: int,
  //  mail: String,
   // fecha: String,
   // comentarios: String,

   // updated_date: { type: Date, default: Date.now },
  // });
  //module.exports = mongoose.model('Contacto', ContactoSchema);


export class Contacto {
    id : string;
    mail : string;
    fecha : string;
    comentarios : string;
}
