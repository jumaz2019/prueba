const {obtenerPromedio,argv} = require('./datos.js');

console.log(argv);
if (argv._[0]=='promedio'){
	console.log('El promedio de '+argv.n+' es '+obtenerPromedio(argv.m,argv.i,argv.p));
}
else {
	console.log(' promedio no calculado');
}