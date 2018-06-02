const request = require("request");
const yargs = require("yargs");

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

    var encodedAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD6zUWuE-kylZPq-B22zzAVjLmn8tW-tHA`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log("Unable to connect to Google servers. Please try again.");
    } else if (body.status === "ZERO_RESULTS") {
        console.log("Unable to find address.");
    } else if (body.status === "OK") {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lat: ${body.results[0].geometry.location.lat}`);
        console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }
}); 