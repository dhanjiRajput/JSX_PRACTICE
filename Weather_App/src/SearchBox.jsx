import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import API from './API';
export const SearchBox = ({updateWeather}) => {

    const [city, setcity] = useState("");


    const getCityWeather = async() =>{
        const key="ff12ff931a996c801acb71f8e591cc9f";
        const citi = await API.get(`?q=${city}&appid=${key}&units=metric`);
    
        let result={
            city: citi.data.name,
            country: citi.data.sys.country,
            temp: citi.data.main.temp,
            tempMin: citi.data.main.temp_min,
            tempMax: citi.data.main.temp_max,
            pressure: citi.data.main.pressure,
            windSpeed: citi.data.wind.speed,
            windDegree: citi.data.wind.deg,
            feelslike:citi.data.main.feels_like,
            sunrise: new Date(citi.data.sys.sunrise*1000).toLocaleTimeString(),
            humidity: citi.data.main.humidity,
            description: citi.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${citi.data.weather[0].icon}@2x.png`
        };

        return result;
    };
  
    const handleChange = (event) => {
        setcity(event.target.value);
    };

    const onsubmit = async(event) => {
        event.preventDefault();
        setcity("");
        let info=await getCityWeather();
        updateWeather(info);
    };

    return (
        <>
            <div>
                <form onSubmit={onsubmit}>
                    <TextField type='text' id="city" label="City Name" variant="outlined" required placeholder='Enter City Name' name="city" value={city} onChange={handleChange}></TextField>&nbsp;&nbsp;
                    <Button id="searchbtn" variant="contained" size='large' type='submit'>Search</Button>
                </form>
            </div>
        </>
    );
};
