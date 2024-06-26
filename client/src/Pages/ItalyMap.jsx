import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVucnlkMTIzIiwiYSI6ImNsdTh4ZmNrdDAzajgyamxsNmVqb2duMTMifQ.R73RfaW67GCZ5qPFXK0plw';

function ItalyMap() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch('http://localhost:3000/seriaa');
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
    if (teams.length === 0) return;

    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [12.4964, 41.9028], 
      zoom: 5.5
    });

    map.on('load', () => {
      map.loadImage(
        '/soccer.png',
        (error, image) => {
          if (error) throw error;

          map.addImage('soccer', image);

          teams.forEach(team => {
            const popupContent = `
              <div>
                <h3>${team.name}</h3>
                <p><strong>Founded:</strong> ${team.founded}</p>
                <p><strong>Stadium:</strong> ${team.stadium}</p>
                <p><strong>Nickname:</strong> ${team.nickname}</p>
                <p><strong>League:</strong> ${team.league}</p>
              </div>
            `;

            new mapboxgl.Marker()
              .setLngLat([team.city[1], team.city[0]])
              .setPopup(new mapboxgl.Popup().setHTML(popupContent))
              .addTo(map);
          });
        }
      );
    });

    return () => map.remove();
  }, [teams]);
  
  return <div id="map-container" style={{ width: '1000px', height: '820px' }} />;
}

export default ItalyMap;
