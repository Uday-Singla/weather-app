const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4aa7ad4ff2c55b042dd798a93c2fa117/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    
    request( {url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined)
        }
        else if (body.error) {
            callback("Unable to find location!", undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +  body.currently.temperature + ' degree out. There is ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast