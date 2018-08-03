const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            discribe: "Address to fetch weather for",
            string: true,
        }
    })
    .help()
    .alias("help", "h")
    .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//      if (errorMessage) {
//          console.log(errorMessage);
//      } else {
//          console.log(JSON.stringify(results, undefined, 2));
//      }
// });

// lat, lng, callback
weather.getWeather(45.5731177, -73.56816839999999, (errorMessage, weatherResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});

