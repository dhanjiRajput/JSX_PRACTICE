import React from 'react'
import { SearchBox } from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export const WeatherApp = () => {
    const [weather, setweather] = useState({});

    const updateWeather = (data) => {
        setweather(data);
    };

    return (
        <>
            <SearchBox updateWeather={updateWeather} />
            <InfoBox weather={weather} />
        </>
    );
};