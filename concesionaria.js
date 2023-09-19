const autosImportados = require('./autos.json');
const personas = require('./personas.json');


const concesionaria = {
   autos: autosImportados,
   buscarAuto : function (patente) {
      return this.autos.find(auto => auto.patente === patente) || null
},
venderAuto: function (patente) {

const autosModificados = this.autos.map(auto => {
   if(auto.patente === patente){
         auto.vendido = true
   }
   return auto
   })
   guardarCambios(autosModificados)
   return "Cambios guardados exitosamente"
},
autosParaLaVenta : function(){
   return this.autos.filter(auto => !auto.vendido)
},
}
module.exports = concesionaria
