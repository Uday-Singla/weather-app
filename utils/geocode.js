const request = require('request')

const geocode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidWRheS1zaW5nbGEiLCJhIjoiY2s1d2lncTc5MWZhMTNubG9yN3V3NzlqMCJ9.gifC0zOEOuD2Aadzf8jm_A'
    request ({url, json:true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined)
        }
        else if (body.features.length === 0) {
            callback("Unable to find location, try again!")   
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode