const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// définition du schéma
const adSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum:["don", "vente"], require: true },
    prix: { type: Number, require: true, get: getPrice, set: setPrice },
    idUser: { type: String, require: true },
},
    {
        timestamps: true
    },
    { toJSON: { getters: true } }
);


    function getPrice(num){
        return (num/100).toFixed(2);
    }
    
    function setPrice(num){
        return num*100;
    }

module.exports = mongoose.model('Ad', adSchema)