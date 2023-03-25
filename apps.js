const {crearTabla} = require('./helpers/tablas');
const colors = require('colors');
const argv = require('./config/yargs');
console.clear();

/*console.log(argv);

console.log(argv.base)*/
const numero = argv.base;
crearTabla(numero, argv.l)
    .then(nameArchivo => console.log(nameArchivo.rainbow, 'creada en el fichero'))
    .catch(err => console.log(err));

