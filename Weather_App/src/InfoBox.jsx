import "./InfoBox.css"
const InfoBox = ({ weather }) => {
    return (
        <>
            <div id="weather">
                <div id="weather_box">
                    <div id="box1" className="boxes">
                        <span id="wind_icon" className="data_color"><i class="fa-solid fa-wind"></i></span><br /><br /><br />
                        <span className="label_color">Speed</span><br /><br />
                        <span id="wind_speed" className="data_color size">{weather.windSpeed}</span><br></br>
                        <span className="data_color">km/h</span><br /><br /><br /><br /><br />
                        <span className="label_color">Degree</span><br /><br />
                        <span id="wind_deg" className="data_color size">{weather.windDegree}</span>
                    </div>
                    <div id="box2" className="boxes">
                        <div id="box2_1" className="box2">
                            <div>
                                <span className="label_color">City</span><br />
                                <span style={{ fontSize: "40px", color: "white" }}>{weather.city}</span><br /><br />
                                <span style={{ fontSize: "40px", color: "white" }}>{weather.temp} <i style={{ fontSize: "20px", color: "grey" }} class="fa-solid fa-temperature-low"></i></span><br /><br />
                                <span className="label_color">Feels Like</span><br />
                                <span id="wind_deg" className="data_color size">{weather.feelslike}</span>
                            </div>
                            <div>
                                <img id="temp_img" src="https://www.sunophthalmics.com/content/dam/sunopthalmics/hero-horizon.png"></img>
                            </div>
                        </div>
                        <div id="box2_2" className="box2">
                            <div>

                                <span className="label_color">Minimum Temperature</span><br />
                                <span id="temp_min" className="data_color size">{weather.tempMin}</span><br /><br /><br />
                                <span className="label_color">Maximum Temperature</span><br />
                                <span id="temp_max" className="data_color size">{weather.tempMax}</span>
                            </div>
                            <div>

                                <span className="label_color">Pressure</span><br />
                                <span id="temp_min" className="data_color size">{weather.pressure}</span><br /><br /><br />
                                <span className="label_color">Humidity</span><br />
                                <span id="temp_max" className="data_color size">{weather.humidity}</span>
                            </div>
                            <div>
                                <span className="label_color">Sunrise</span><br />
                                <span id="temp_min" className="data_color size">{weather.sunrise}</span><br /><br /><br />
                                <span className="label_color">Country</span><br />
                                <span id="temp_max" className="data_color size">{weather.country}</span>
                            </div>
                        </div>
                        <div id="box2_3" className="box2">
                            <img id="img" src="https://t4.ftcdn.net/jpg/09/19/60/55/360_F_919605542_F3tYXQ0BsjpbbM7FMGsCg424MwzLaYKJ.jpg" ></img>
                        </div>
                    </div>
                    <div id="box3" className="boxes" style={{ textAlign: "center" }}>
                        <div>
                            <img src={weather.icon} style={{height:"150px", width:"150px"}}></img><br /><br /><br/>
                            <span className="label_color">Weather</span><br /><br />
                            <span id="temp_min" className="data_color size">{weather.description}</span><br /><br /><br /><br />
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Rotating_earth_%28huge%29.gif" style={{height:"150px", width:"150px"}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoBox;