import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import { MAPBOX_TOKEN } from "../constants";

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
            <h3>Your Location: {MAPBOX_TOKEN}</h3>
            <Map
              mapboxAccessToken={MAPBOX_TOKEN}
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