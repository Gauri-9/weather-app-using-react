import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Weather2 = () => {

    let [city, setCityName] = useState("pune");

    let [weatherData, setWeatherData] = useState();

    async function loadWeather(city) {
        try{
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=239678109019cb88927e2f22536f4db1`)
            let data = response.data;
            setWeatherData({
                tempreture: data.main.temp,
                humidity: data.main.humidity,
                location: data.name,
                windSpeed: data.wind.speed,
                feels_like: data.main.feels_like,
                countryname : data.sys.country
            });


        }
        catch(error){
            console.error(error);
        }     

    }

    useEffect(() => {
        loadWeather(city)
    }, [])



    return (
        <>

        {
        
        weatherData ? <>
        
        <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <button onClick={()=>loadWeather(city)}>Search</button>
            </div>

          
                <div className="container mt-5">
                    <div className="card text-center weather-card">
                        <div className="card-body">
                            <h5 className="card-title" id="city-name">
                                {weatherData.location}, {weatherData.countryname}
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">Current Weather</h6>
                            <div className="weather-info">
                                <p className="temp" id="temperature">Temperature: {weatherData.temp}°C</p>
                                <p className="feels-like" id="feels-like">Feels Like: {weatherData.feels_like}°C</p>
                                <p className="humidity" id="humidity">Humidity: {weatherData.humidity}%</p>
                                <p className="wind-speed" id="wind-speed">Wind Speed: {weatherData.windSpeed} km/hr</p>
                            </div>
                        </div>
                    </div>
                </div> 
               
        
        </> :
        <>
        <p>Loading...</p>
        </>
        
        }
            
        </>
    );
};


export default Weather2