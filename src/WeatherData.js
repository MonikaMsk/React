import { useEffect,useState} from 'react'


  const key = "e740ada90ec88b9b35cf28d625c8f75c";
  const url = "https://api.openweathermap.org/data/2.5/"

 
function WeatherData(){

    
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({})

  
  
    useEffect(() => {
      async function fetchData(){ 
        const  response = await fetch(`${url}weather?q=${city}&units=metric&appid=${key}`);
        const res =  await response.json()
        setWeather(res); 
      }
  
       fetchData()
    }, [city])
    

    return(
        <div>
            <h1>Weather</h1>
          <div className="searchBox">
             <input className="searchBar" type="text" 
             placeholder="Search a city" 
             onChange={(e) => setCity(e.target.value)} 
             value={city} 
            />
          </div>

 {(typeof weather.main != 'undefined') ? (

      
     
             <div className="weather">
             <div className="city">{weather.name} </div>
             <div className="temp">{Math.round(weather.main.temp)}° C</div>
             <div className="desc">{weather.weather[0].description}</div>  
             {weather.main.temp > 20 && <div className="text">No need for a sweater!</div>} 
             {weather.main.temp < 20 && <div className="text">Wearing a sweater would be a good idea!</div>} 
          </div>  
    
  ) : ('') }
  
        </div>
    )
}

export default WeatherData