import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1IjoiaGVucnlkMTIzIiwiYSI6ImNsdTh4ZmNrdDAzajgyamxsNmVqb2duMTMifQ.R73RfaW67GCZ5qPFXK0plw';
mapboxgl.accessToken = TOKEN;

function EnglandMap() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch('http://localhost:3000/premiere');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.8252, 52.5],
      zoom: 6
    });

    map.on('load', () => {
      // Add the custom marker image
      map.loadImage('../soccer.png', (error, image) => {
        if (error) throw error;
        map.addImage('../soccer.png', image);
        
        // Add markers for each team
        teams.forEach(team => {
          const [longitude, latitude] = team.city;
          const popupContent = `
            <div>
              <h3>${team.name}</h3>
              <p><strong>Founded:</strong> ${team.founded}</p>
              <p><strong>Stadium:</strong> ${team.stadium}</p>
              <p><strong>Nickname:</strong> ${team.nickname}</p>
              <p><strong>League:</strong> ${team.league}</p>
            </div>
          `;

          // Create the custom marker
          const marker = new mapboxgl.Marker({ 
            element: createCustomMarkerElement('client/public/soccer.png') // Pass the image id
          })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML(popupContent))
            .addTo(map);
        });
      });
    });

    return () => map.remove();
  }, [teams]);

  // Helper function to create custom marker element
  const createCustomMarkerElement = (markerId) => {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.width = '30px';
    markerElement.style.height = '30px';
    markerElement.style.backgroundImage = `url(../soccer.png)`; // URL to your marker image
    return markerElement;
  };

  return <div id="map-container" style={{ width: '1000px', height: '820px' }} />;
}

export default EnglandMap;
