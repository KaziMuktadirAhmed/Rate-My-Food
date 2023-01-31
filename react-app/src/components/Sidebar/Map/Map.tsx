import L, { LatLngTuple, Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

function Map() {
  let map: LeafletMap;
  const mapZoomLevel = 13;

  const loadMap = function (position: any) {
    map?.remove();
    const { latitude, longitude } = position.coords;
    const coords: LatLngTuple = [latitude, longitude];

    map = L.map("map").setView(coords, mapZoomLevel);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    return true;
  };
  const getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadMap, function () {
        alert("Could not get location");
        return true;
      });
    }
  };

  getLocation();

  return <div id="map" style={{ height: "100vh" }}></div>;
}

export default Map;
