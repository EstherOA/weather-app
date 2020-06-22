export function getImageForWeather(weather) {
    var image;
    if(weather === 'Clear' || weather === '') {
        image = require('../assets/images/clear.jpg');
    } else if(weather === 'Hail') {
         image = require('../assets/images/hail.jpg');
    } else if(weather === 'Showers') {
        image = require('../assets/images/showers.jpg');
    } else if(weather === 'Snow') {
        image = require('../assets/images/snow.jpg');
    } else if(weather === 'Sleet') {
        image = require('../assets/images/sleet.jpg');
    } else if(weather === 'Heavy Cloud') {
        image = require('../assets/images/heavy_cloud.jpg');
    } else if(weather === 'Light Cloud') {
        image = require('../assets/images/light_cloud.jpg');
    } else if(weather === 'Thunderstorm') {
        image = require('../assets/images/thunderstorm.jpg');
    } else if(weather === 'Heavy Rain') {
        image = require('../assets/images/heavy_rain.jpg');
    } else if(weather === 'Light Rain') {
        image = require('../assets/images/light_rain.jpg');
    }
    return image;
}