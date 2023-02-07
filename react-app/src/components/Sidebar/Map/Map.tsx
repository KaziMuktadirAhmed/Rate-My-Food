import { useState } from "react";
import L, { LatLngExpression, LatLngTuple, Map as LeafletMap } from "leaflet";

import "leaflet/dist/leaflet.css";
import "./leafletStyleOverrule.css";
import styles from "./Map.module.css";
import { linkMapRender } from "../../../controllers/content.controller";
import { getCoordsAndName } from "../../../models/contents.model";

function Map() {
  const [render, setRender] = useState(false);
  linkMapRender(setRender);

  let map: LeafletMap;
  const mapZoomLevel = 13;
  const markerPositions = getCoordsAndName();

  const loadMap = function (position: any) {
    map = L.map("map", {
      zoomControl: false,
      //... other options
    }).setView(position, mapZoomLevel);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);

    return true;
  };

  const getLocation = function () {
    let coords: { success: boolean; latlng: LatLngExpression };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const coords: LatLngTuple = [latitude, longitude];
          loadMap(coords);
          // popupMarker(coords, "this is youre current location");
          markerPositions.map((item: any) => {
            let {
              geo: { latitude, longitude },
            } = item;
            popupMarker([latitude, longitude], item.text);
          });
        },
        function () {
          alert("Could not get location");
          return true;
        }
      );
    }
  };

  const popupMarker = function (position: any, popupString: string) {
    L.marker(position)
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: styles["leaflet-popup"],
        })
      )
      .setPopupContent(`${popupString}`)
      .openPopup();
  };

  getLocation();

  return (
    <div className={styles.container}>
      <div id="map" className={styles.map}></div>
    </div>
  );
}

export default Map;
