import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import { MAPBOX_TOKEN } from "../constants";

function MapView() {
  const albertaCoordinates = [54.4983646, -115.0001885]
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    setViewport({
      ...viewport,
      latitude: albertaCoordinates[0],
      longitude: albertaCoordinates[1],
      zoom: 3.5,
    })
  }, []);

  return (
    <div class="map">
      {viewport.latitude && viewport.longitude && (
        <div class="map">
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