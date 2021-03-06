import React, { useEffect, useState } from "react";
import Weather from './components/weatherCard';
import axios from "axios";
import './App.css';


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`).then(result => {
        setData(result.data)
        console.log(result.data);
      })
    }


    fetchData();
    
  }, [lat, long]);

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          
        </div>
      )}
    </div>
  );
}

export default App;
