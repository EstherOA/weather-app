export const fetchLocationId = async(city) => {
    try {
       let response = await fetch('https://www.metaweather.com/api/location/search/?query=' + city);
        let responseJson = await response.json();
        return responseJson[0].woeid;
    } catch (error) {
        console.error(error);
    }
};

export const fetchWeather = async(woeid) => {
  const today = new Date();
  const formattedDate = `/${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
    try {
        let response = await fetch('https://www.metaweather.com/api/location/' + woeid + 
        formattedDate);
        let responseJson = await response.json();

        return {"weather" : responseJson[0].weather_state_name,
                "location" : responseJson[0].title,
                "temperature" : responseJson[0].max_temp,
              };  
    } catch (error) {
        console.log(error);
    }
};



