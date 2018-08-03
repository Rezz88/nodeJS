// Dark Skies API Key 
// 1756090ac83f62ea2a9d6ededdd84abb

const request = require('request');


var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/1756090ac83f62ea2a9d6ededdd84abb/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to fetch weather.");
        }
    })
}

module.exports = {
    getWeather
}