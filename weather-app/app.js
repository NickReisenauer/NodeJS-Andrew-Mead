const axios = require("axios");

const url =
  "http://api.weatherstack.com/current?access_key=249396083b7e249b4b2987b2096ef376&query=37.8267,-122.4233&units=f";

axios
  .get(url)
  .then((response) => {
    const current = response.data.current.temperature;
    const feelsLike = response.data.current.feelslike;
    console.log(
      `It is currently ${current} degrees out. It feels like ${feelsLike} degrees out.`
    );
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmlja3JlaXNlbmF1ZXIiLCJhIjoiY2s3a3JqY294MDAxYzNobXUwb2UzYzV6biJ9.YQi9oFC0rW41CTNhzHAFng&limit=1`
  )
  .then((response) => {
    const longitude = response.data.features[0].geometry.coordinates[0];
    const latitude = response.data.features[0].geometry.coordinates[1];
    console.log(longitude, latitude);
  })
  .catch((error) => console.log(error));

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoibmlja3JlaXNlbmF1ZXIiLCJhIjoiY2s3a3JqY294MDAxYzNobXUwb2UzYzV6biJ9.YQi9oFC0rW41CTNhzHAFng&limit=1`;
  axios
    .get(url)
    .then((response) => callback(undefined, response.data))
    .catch((error) => callback(error, undefined));
};

geocode("dsfasdfajsdf", (error, data) => {
  console.log(error, data);
});
