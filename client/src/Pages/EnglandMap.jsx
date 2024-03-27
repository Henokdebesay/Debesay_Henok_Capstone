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
      console.log(data);
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
        // Load an image from an external URL.
        map.loadImage(
            '/soccer.png',
            (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                map.addImage('cat', image);

                // Add a data source containing one point feature.
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [ 0.1276, 51.5072]
                                }
                            }
                        ]
                    }
                });

                // Add a layer to use the image to represent the data.
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point', // reference the data source
                    'layout': {
                        'icon-image': 'cat', // reference the image
                        'icon-size': 0.25
                    }
                });

        
        teams.forEach(team => {
          const [longitude, latitude] = team.city;
          console.log('Creating popup for:', team.name);
          const popupContent = `
            <div>
              <h3>${team.name}</h3>
              <p><strong>Founded:</strong> ${team.founded}</p>
              <p><strong>Stadium:</strong> ${team.stadium}</p>
              <p><strong>Nickname:</strong> ${team.nickname}</p>
              <p><strong>League:</strong> ${team.league}</p>
            </div>
          `;
          console.log('Popup content:', popupContent);
  
          new mapboxgl.Marker({ 
            element: createCustomMarkerElement('soccer') 
          })
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup().setHTML(popupContent))
          .addTo(map);
        });
      });
    });
  
    return () => map.remove();
  }, [teams]);
  

  const createCustomMarkerElement = (markerId) => {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.width = '30px';
    markerElement.style.height = '30px';
    markerElement.style.backgroundImage = `url(${markerId}.jpeg)`;
    markerElement.style.cursor = 'pointer'; // Set cursor to pointer
    return markerElement;
  };

  return <div id="map-container" style={{ width: '1000px', height: '820px' }} />;
}

export default EnglandMap;
