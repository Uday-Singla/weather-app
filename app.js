const request = require('request')

const weatherURL = "https://api.darksky.net/forecast/4aa7ad4ff2c55b042dd798a93c2fa117/37.8267,-122.4233"

request({ url: weatherURL, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather services!")
    }
    else if (response.body.error) {
        console.log("Unable to find location!")
    }
    else {
        const rain = response.body.currently.precipProbability * 100
        const temperature = response.body.currently.temperature
        console.log('It is currently ' + temperature + ' degree out. There is ' + rain + '% chance of rain.')
    }
})

geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidWRheS1zaW5nbGEiLCJhIjoiY2s1d2lncTc5MWZhMTNubG9yN3V3NzlqMCJ9.gifC0zOEOuD2Aadzf8jm_A"
request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to location services!")
    }
    else if (response.body.features.length === 0) {
        console.log("Unable to find co-ordinates!")
    }
    else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log("Longitude: " + longitude + "\nLatitude: " + latitude)
    }
})