const InfoBox=({weather})=>{
    return(
       <>
        <h3>City: {weather.city}</h3>
        <p>Temperature: {weather.temp}°C</p>
        <p>Description: {weather.description}</p>
       </>
    );
};

export default InfoBox;