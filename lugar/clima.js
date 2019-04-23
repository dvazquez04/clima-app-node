const axios = require('axios');

const getClima = async(lat, lon) => {
    console.log("CLIMA: " + lat + "  " + lon);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4c2cde9cb9271b12d392c134f41723fa&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
};