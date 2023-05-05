import "./Planns.scss";
import { motion } from "framer-motion";

export default function Planns() {
  return (
    <div className="planns--wrapper">
      <div className="main--wrapper">
        <div className="title--wrapper">
          <h1>Nos ajustamos a</h1>
          <h1>tus necesidades</h1>
        </div>
        <div className="planns--container">
          <div data-cursor="-black" className="plann">
            <h3>Eventos</h3>
            <h3>Enseres</h3>
            <div className="divider"></div>
            <p>
              Disfruta de un evento completamente hermoso rodeado de tus
              invitados disfrutando del lugar y de un excelente servicio.
            </p>
            <motion.div
              data-cursor-text="Ir!"
              data-cursor-stick=".button"
              className="button"
              data-cursor="-white"
              whileHover={{ scale: 1.06 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
              onTap={() => {
                window.location.href = "#informacion";
              }}
            >
              Más Información
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </motion.div>
          </div>
          <div data-cursor="-black" className="plann">
            <h3>Paquetes</h3>
            <h3>Enseres</h3>
            <div className="divider"></div>
            <p>
              Conoce toda la variedad de paquetes que ofrecemos para facilitar tu evento.
            </p>
            <motion.div
              data-cursor-text="Ir!"
              data-cursor-stick=".button.right"
              className="button right"
              data-cursor="-white"
              whileHover={{ scale: 1.06 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
              onTap={() => {
                window.location.href = "/paquetes";
              }}
            >
              Más Información
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
