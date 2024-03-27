import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const TOKEN = 'pk.eyJ1IjoiaGVucnlkMTIzIiwiYSI6ImNsdTh4ZmNrdDAzajgyamxsNmVqb2duMTMifQ.R73RfaW67GCZ5qPFXK0plw';

mapboxgl.accessToken = TOKEN;

function EnglandMap() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container', 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [-1.8252, 52.5], 
      zoom: 6 
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []); 

  return <div id="map-container" style={{ width: '1000px', height: '820px' }} />;
}

export default EnglandMap;
