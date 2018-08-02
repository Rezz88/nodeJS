// const yargs = require("yargs");

// const geocode = require("./geocode/geocode");

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: "address",
//             discribe: "Address to fetch weather for",
//             string: true,
//         }
//     })
//     .help()
//     .alias("help", "h")
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//      if (errorMessage) {
//          console.log(errorMessage);
//      } else {
//          console.log(JSON.stringify(results, undefined, 2));
//      }
// });

// Dark Skies API Key 
// 1756090ac83f62ea2a9d6ededdd84abb

const request = require('request');

request({
    url: "https://api.darksky.net/forecast/1756090ac83f62ea2a9d6ededdd84abb/45.5731177,-73.56816839999999",
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log("Unable to fetch weather.");
    }
})