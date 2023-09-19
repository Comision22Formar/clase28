const concesionaria = require('./concesionaria');
const process = require('process');

switch (process.argv[2].toLowerCase()) {
    case 'buscar':
        console.log(concesionaria.buscarAuto(process.argv[3]))
        break;

    default:
        break;
}
