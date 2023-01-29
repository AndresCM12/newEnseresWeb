import "./OurServices.scss";
import hero from "../../images/hero-uno.png";
import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <motion.div data-cursor="-black" className="our-services--wrapper">
      <motion.div
        transition={{ ease: "easeOut", duration: 1.5 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        data-cursor="-white"
        className="main--wrapper"
      >
        <div className="left">
          <h1>Sobre</h1>
          <h1>nosotros</h1>
          <p>
            Durante estos años de recorrido, hemos dirigido nuestros esfuerzos
            en fortalecer la convivencia entre familias y seres queridos,
            creando espacios magníficos para cada ocasión especial.
          </p>
        </div>
        <img src={hero} />
      </motion.div>
    </motion.div>
  );
}
