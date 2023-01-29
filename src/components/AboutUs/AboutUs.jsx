import "./AboutUs.scss";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="AboutUs--wrapper">
      <motion.div
        transition={{ ease: "easeOut", duration: 1.5 }}
        initial={{ y: 400 }}
        viewport={{ once: true }}
        whileInView={{ y: 0 }}
        data-cursor="-black"
        className="AboutUs--container"
      >
        <div className="left">
          <h1>Nuestros</h1>
          <h1>Servicios</h1>
        </div>
        <div className="divider"></div>
        <div className="right">
          <div className="text--container">
            <h6>Organización</h6>
            <p>
              Reconocemos la importancia de mantener homogeneidad conceptual en
              cada espacio de tu evento para transmitir exactamente lo que
              deseas.
            </p>
          </div>
          <div className="text--container">
            <h6>Catering</h6>
            <p>
              Banquetes exquisitos y servicio a mesas sumamente cuidado,
              garantizando una atención especial para cada invitado
            </p>
          </div>
          <div className="text--container">
            <h6>Mobiliario</h6>
            <p>
              Adorna cada espacio de manera precisa con nuestras opciones de
              renta ó venta
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
