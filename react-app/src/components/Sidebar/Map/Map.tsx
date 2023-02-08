import { useEffect, useState } from "react";
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

  const initializeMap = function () {
    map = L.map("map", {
      zoomControl: false,
    });

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);
  };

  const loadMap = function (position: any) {
    map.setView(position, mapZoomLevel);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      // maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    return true;
  };

  const getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const coords: LatLngTuple = [latitude, longitude];
          loadMap(coords);
          popupMarker(map, coords, "this is youre current location....");
        },
        function () {
          alert("Could not get location");
          return true;
        }
      );
    }
  };

  const popupMarker = function (
    map: LeafletMap,
    position: any,
    popupString: string
  ) {
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

  const moveMapToPopup = function (position: any, map: any) {
    map.setView(position, mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
  };

  // console.log("just before if block");
  // if (map !== undefined) {
  //   console.log("in if block");
  //   markerPositions.map((item: any) => {
  //     console.log("humm", item);
  //     let {
  //       position: { latitude, longitude },
  //       text,
  //     } = item;
  //     popupMarker(map, [latitude, longitude], text);
  //   });
  // }

  useEffect(() => {
    console.log("side effect");
    if (map !== undefined) {
      map.remove();
    }

    initializeMap();
    getLocation();
  }, []);

  // useEffect(() => {}, [render]);

  return (
    <div className={styles.container}>
      <div id="map" className={styles.map}></div>
    </div>
  );
}

export default Map;
