const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=4171%20Esplanade%20Ave%20Montreal",
    json: true
}, (error, response, body) => {
    console.log(body);
});