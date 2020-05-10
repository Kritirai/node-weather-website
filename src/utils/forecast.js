const request = require('request')

const forecast=(latitude,longitude,callback)=>{
    const url = 'https://api.weatherbit.io/v2.0/current?lat='+latitude+'&lon='+longitude+'&Key=189cb92ff78f499d930171323e1dd6f3'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }else if (body.error){
            callback('Unable to find location. Try another search.',undefined)
        }else{
            let forecastData = ["The Weather seems like "+body.data[0].weather.description,"The Weather seems like "+body.data[0].weather.description,
            "The current temperature is "+ body.data[0].temp + ' °C' ,"Current AQI is " + body.data[0].aqi,"Currently precipitation is "+body.data[0].precip +" mm/hr"
          ]
      
          callback(undefined,forecastData)
        }
    })
}

module.exports = forecast