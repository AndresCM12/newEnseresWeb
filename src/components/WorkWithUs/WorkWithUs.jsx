import "./WorkWithUs.scss";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState, useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFsdGhlYWRhIiwiYSI6ImNsNmxqNnd5ejAzZXAzcXV4NXRxcXQ4eTUifQ.vndUP9Cmdl9FeXQSKtL_wA";

export default function WorkWithUs() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-106.05678246833963);
  const [lat, setLat] = useState(28.624580635823964);
  const [zoom, setZoom] = useState(17);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/maltheada/cl7e04gqo000e14p9hyxji902",
      center: [lng, lat],
      zoom: zoom,
      width: "100%",
      height: "700px",
    });
  });
  return (
    <>
      <div className="workWithUs--wrapper" data-cursor="-black">
        <div className="workWithUs--container">
          <div className="map-container left" ref={mapContainer}></div>
          <div data-cursor="-white" className="right">
            <h1>Trabajemos</h1>
            <h1>juntos</h1>
            <form>
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Correo" />
              <input type="text" placeholder="Mensaje" />
              <div className="button send" data-cursor-text="Enviar!" data-cursor-stick=".button.send">
                Enviar{" "}
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
