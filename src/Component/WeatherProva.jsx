import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import HourlyWeather from './HourlyWeather';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WeatherProva = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [language, setLanguage] = useState('en');

  const fetchData = async function () {
    const apiKey = '52e68594b8eb3359f288cd921f6e2a8e';

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const delayedFetchData = _.debounce(fetchData, 500);

  useEffect(() => {
    delayedFetchData();
    return delayedFetchData.cancel;
  }, [city, language]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    delayedFetchData();
  };

  

  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div className='principal text-center'>
      <form onSubmit={(e) => e.preventDefault()}>
       

        <input
          className='mt-4'
          type="text"
          placeholder="Scrivi il nome della città"
          value={city}
          onChange={handleInputChange}
        />
        <button type="button" className='btn btn-link' onClick={handleClick}>
          <img className='lente' src="/search.svg" alt="search" />
        </button>
      </form>

      {weatherData ? (
        <>
          <h2 className='mt-4 fs-1 fw-bold mb-3'>{weatherData.name}</h2>
          {weatherData.main && (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
              <p className='fs-4'><i className="bi bi-thermometer-half me-2"></i>Temperatura: {convertKelvinToCelsius(weatherData.main.temp)}°C</p>
              <p className='fs-4'> <i className="bi bi-droplet-half me-2"></i>Umidità: {weatherData.main.humidity}%</p>
            </>
          )}
          <p className='fs-4'> <i className="bi bi-wind me-2"></i>Vento: {weatherData.wind.speed} km/h</p>

          <HourlyWeather city={city}  />
        </>
      ) : (
        <p className='me-5'>Attendo ricerca...</p>
      )}
    </div>
  );
};

export default WeatherProva;
