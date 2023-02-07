import React, {useEffect, useState} from "react";
import "./weather.css"
 
const Weather = () =>{
const [city, setCity] = useState(null);
const [search, setSearch] = useState("Noida");

    useEffect(() =>{
        const fetchApi =async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=191a3ec880b1b40f19f387c8e45c66dc`
            const response = await fetch(url);
            const resJson = await response.json();
            
            setCity(resJson.main);
        };
        fetchApi();
}, [search] );

    return(
        <>
        
      <div className="box">
      <div className="inputData">
      <input type="search" 
       value={search}
       className="inputField"
       onChange={(event) =>{ setSearch(event.target.value)}} />

      </div>
      {!city ? (
        <p className="errorMsg">No Data Found</p>
      )  : (
        <div>
        <div className="info">
        <h2 className="location">
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
        {city.temp}°Cel
        </h1>
        <h3 className="tempin_max">   Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
        </div>
        <div className="wave_one"></div>
        <div className="wave_two"></div>
        <div className="wave_three"></div>
        </div>
        
        )}
        </div>
        </>
        
    );
}

export default Weather;
