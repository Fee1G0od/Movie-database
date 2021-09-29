import React, { useState } from  'react';
import "./WeatherPage.css"


const api = {
  key: "df6525f6c7aec38f989dd3273c88fcd9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function WeatherApp() {
  const[query, setQuery] = useState('');
  const[weather, setWeather] = useState('');
  let weatherId;
  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log(result);
      });
    }
  }


  const dateBuilder = (d) =>{
    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days =["Sundey", "Mondey", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }



  return (
    <div>

      
      <div className = 'WeatherApp' id="WeatherAppId">
          <div className={ (typeof weather.main != "undefined")
            ?(
              (typeof(weatherId = weather.weather[0].main) != 'undefined' )

              ? (`WeatherApp + ${weatherId.toLowerCase(weatherId)} `)
              :'WeatherApp'
              //((weather.main.temp > 0)?weatherId == 'Clear' : "app") 
              //? 'app' 
              //: 'app'
            )
          

          : 'WeatherApp'
          
          }>
            
            
            <main>
              <div className="search-box">
                <input 
                type="text"
                className="search-bar"
                placeholder="Search..." 
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                />
              </div>
              {(typeof weather.main != "undefined") ? (
                    <div>
                      <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                  </div>
                  <div className="weather-box">
                    <div className="temp">
                      {Math.round(weather.main.temp)}°с
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>
                    </div>
              ) : ('')}
            </main>
            
            </div>
      </div>
      
    </div>
    
  );
  
}

export default WeatherApp;
