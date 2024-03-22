import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-openweathermap/leaflet-openweathermap.css';
import 'leaflet-openweathermap';

const WindAndCurrentsMap = () => {
  const windMapRef = useRef(null);
  const currentsMapRef = useRef(null);

  useEffect(() => {
    const apiKey = '52e68594b8eb3359f288cd921f6e2a8e';

    // Mappa dei Venti
    if (!windMapRef.current) {
      const windMap = L.map('windMap').setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(windMap);
      L.OWM.wind({ opacity: 0.8, appId: apiKey }).addTo(windMap);
      windMapRef.current = windMap;
    }

    
  }, []);

  return (
    
    <div className='maps-container '>
      
        
          
      <div id="windMap" className='  rounded border border-dark border-3 ' style={{ width: '475px', height: '370px' }} /></div>
    
  );
};

export default WindAndCurrentsMap;
