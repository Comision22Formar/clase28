const autosImportados = require('./autos.json');
const personas = require('./personas.json');


const concesionaria = {
   autos: autosImportados,
   buscarAuto : function (patente) {
      return this.autos.find(auto => auto.patente === patente) || null
},
};

module.exports = concesionaria
