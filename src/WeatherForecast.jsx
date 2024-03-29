import React, { useState, useEffect } from 'react';
import WeatherIcon from './WeatherIcon';
import "./WeatherForecast.css"
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {

    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    // useEffect
    // if the coordinates change
    // set loaded to false

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    if (loaded) {
        return (
            <div className='WeatherForecast'>
                <div className='row'>
                    {forecast.map(function (dailyForecast, index) {
                        console.log("Index:", index);
                        if (index < 5) {
                        return (
                            <div className='col' key={index} >
                                <WeatherForecastDay data={dailyForecast} />                 
                            </div>
                        );  
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let apiKey = "b0ce99600860751f0e00c01c634ad510";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
