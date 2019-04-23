const axios = require('axios');

const getLugarLatLog = async(dir) => {
    const encodeurl = encodeURI(dir);
    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeurl}`,
        headers: { 'X-RapidAPI-Key': '8a4fe1a80cmshd19dac148dc1475p1657b8jsn135a1d307e80' }
    });

    const resp = await instance.get();
    // instance.get()
    // .then(res => console.log(res.data.Results[0]))
    // .catch(err => console.log('ERROR!!!!!! ', err));

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLog
}