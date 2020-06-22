export const fetchLocationId = async(city) => {
    try {
       let response = await fetch('https://www.metaweather.com/api/location/search/?query=' + city);
        let responseJson = await response.json();
        return responseJson[0].woeid;
        // console.log(responseJson)
    }catch (error) {
        console.error(error);
    }
};

export const fetchWeather = async(woeid) => {
    try {
        let response = await fetch('https://www.metaweather.com/api/location/' + woeid);
        let responseJson = await response.json();

        return {"weather" : responseJson.consolidated_weather[0].weather_state_name,
                "location" : responseJson.title,
                "temperature" : responseJson.consolidated_weather[0].the_temp,
              }  

    }catch (error) {
        console.log(error);
    }
};



