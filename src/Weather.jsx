import React, { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [tempData, setTempData] = useState(null);
    const [city, setCityName] = useState("Nagpur");

    async function loadWeather(cityName) {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=239678109019cb88927e2f22536f4db1`);
            let data = await response.json();

            if (data.cod === "404") {
                alert("City not found!");
                setTempData(null); 
            } else {
                setTempData(data);
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
            alert("Failed to fetch weather. Please try again.");
        }
    }

    useEffect(() => {
        loadWeather("nagpur");
    }, []);

    const handleSearch = () => {
        if (city.trim() !== "") {
            loadWeather(city);
        } else {
            alert("Please enter a city name!");
        }
    };

    return (
        <>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Enter city" 
                    value={city} 
                    onChange={(e) => setCityName(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {tempData && (
                <div className="container mt-5">
                    <div className="card text-center weather-card">
                        <div className="card-body">
                            <h5 className="card-title" id="city-name">
                                {tempData.name}, {tempData.sys.country}
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">Current Weather</h6>
                            <div className="weather-info">
                                <p className="temp" id="temperature">Temperature: {tempData.main.temp}°C</p>
                                <p className="feels-like" id="feels-like">Feels Like: {tempData.main.feels_like}°C</p>
                                <p className="humidity" id="humidity">Humidity: {tempData.main.humidity}%</p>
                                <p className="wind-speed" id="wind-speed">Wind Speed: {tempData.wind.speed} km/hr</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Weather;
