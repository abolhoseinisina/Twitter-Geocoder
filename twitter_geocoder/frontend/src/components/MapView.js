import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";

function MapView() {
    const [viewport, setViewport] = useState({});

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setViewport({
          ...viewport,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 3.5,
        });
      });
    }, []);

    return (
      <div>
        {viewport.latitude && viewport.longitude && (
          <div class="map">
            <h3>Your Location:</h3>
            <Map
              mapboxAccessToken="pk.eyJ1IjoiYWJvbGhvc2VpbmlzaW5hIiwiYSI6ImNsZzQyenE0azAwNG8za216Y2ZxcTBvN2gifQ.LnL29uzGHHMfPE2FzK_mRA"
              initialViewState={viewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <Marker
                longitude={viewport.longitude}
                latitude={viewport.latitude}
              />
            </Map>
          </div>
        )}
      </div>
    );
}
export default MapView;