import "./WorkWithUs.scss";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      <div
        className="workWithUs--wrapper"
        data-cursor="-black"
        id="informacion"
      >
        <motion.div
          transition={{ ease: "easeOut", duration: 1.5 }}
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          className="workWithUs--container"
        >
          <div className="map-container left" ref={mapContainer}></div>
          <div data-cursor="-white" className="right">
            <h1>Trabajemos</h1>
            <h1>juntos</h1>
            <form
              action="https://mailthis.to/q.chavezandres@gmail.com"
              method="POST"
            >
              <input type="text" placeholder="Nombre" name="Nombre" required />
              <input type="email" placeholder="Correo" name="Email" required />
              <input type="text" placeholder="Mensaje" name="Mensaje" />
              <motion.button
                whileHover={{ scale: 1.06 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
                className="button send"
                data-cursor-text="Enviar!"
                data-cursor-stick=".button.send"
                type="submit"
              >
                Enviar
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}
