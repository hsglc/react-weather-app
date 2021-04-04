
import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import './weatherCard.css';

const refresh = () => {
    window.location.reload();
}

const WeatherCard = ({ weatherData }) => (
    <div className="card-container">
        
        <div className="header">
            <p>Location: {weatherData.name}</p>
            
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>
        <div className="main">
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
        </div>
        <div className="main">
            Temperature: {Math.floor(weatherData.main.temp)}&deg;C
            <p>Description: {(weatherData.weather[0].description).replace(/\b\w/g, l => l.toUpperCase())}</p>

        </div>







    </div>
)




export default WeatherCard;