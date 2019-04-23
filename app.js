const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLog(argv.direccion)
//     .then(console.log)

// clima.getClima("18.120001", "-77.129997")
//     .then(console.log)
//     .catch(err => console.log(err));



const getInfo = async(direccion) => {
    //salida 
    //El clima de xxx es de xxx
    //No se pudo determinar el clima de xxx
    try {
        const coordenadas = await lugar.getLugarLatLog(direccion);

        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return (`El clima de ${direccion} es de ${temperatura}.`);
    } catch (err) {
        return (`No se pudo determinar el clima de ${direccion}`);
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)