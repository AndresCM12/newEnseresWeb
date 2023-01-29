import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Header.scss";

export default function Header() {
  return (
    <motion.header
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.7 }}
      initial={{ y: -100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <h1>Enseres</h1>
      <nav>
        <ul>
          <li data-cursor-text="Ir">
            <Link to={"/home"}>Servicios</Link>
          </li>
          <li data-cursor-text="Ver" className="selected">
            <p style={{ color: "white", cursor: 'pointer' }}>Empresarial</p>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
