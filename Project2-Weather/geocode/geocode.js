const request = require("request");

// Removed URL Key -> &key=AIzaSyD6zUWuE-kylZPq-B22zzAVjLmn8tW-tHA

var geocodeAddress = (address, resolve, reject) => {
  var encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        reject("Unable to connect to Google servers. Please try again.");
      } else if (body.status === "ZERO_RESULTS") {
        reject("Unable to find address.");
      } else if (body.status === "OK") {
        reject(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress
};
