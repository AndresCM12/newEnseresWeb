import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import whiteLogo from "../../images/white-logo.png";

import "./index.scss";

export default function IntroScreen() {
  const x = useMotionValue(0);

  const background = useTransform(
    x,
    [20, 0, 1500],
    ["#222222", "#fbf8f3", "#222222"]
  );
  return (
    <motion.div id="IntroScreen" style={{ background }}>
      <motion.div
        drag="x"
        onDrag={(_, info) => {
          x.set(info.point.x);
          console.log(info.point.x);
        }}
        dragConstraints={{ left: 0, right: 0 }}
        className="intro--main--wrapper"
        data-cursor="-black"
      >
        <div className="logo--wrapper">
          <div className="separator"></div>
          <img src={whiteLogo} alt="white logo" />
          <div className="separator"></div>
        </div>
        <h1>¿Qué estás buscando?</h1>
        <div className="buttons--wrapper">
          <NavLink to="/inicio">
            <motion.div
              initial={{ backgroundColor: "#222222" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              whileHover={{ backgroundColor: "#fbf8f3", color: "#222222" }}
              className="button--social"
            >
              Inicio
            </motion.div>
          </NavLink>
          <NavLink to="/paquetes">
            <motion.div
              initial={{ backgroundColor: "#222222" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              whileHover={{ backgroundColor: "#fbf8f3", color: "#222222" }}
              className="button--empresarial"
            >
              Paquetes
            </motion.div>
          </NavLink>
        </div>
      </motion.div>
      <NavLink data-cursor-text="Ir" to="/inicio">
        <p className="link--to--home">Ir al inicio</p>
      </NavLink>
    </motion.div>
  );
}
