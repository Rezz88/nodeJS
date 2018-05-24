const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=4171%20Esplanade%20Ave%20Montreal&key=AIzaSyD6zUWuE-kylZPq-B22zzAVjLmn8tW-tHA",
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});