import "./PaquetesPage.scss";
import whiteLogo from "../../../images/white-logo.png";
import WorkWithUs from "../../../components/WorkWithUs/WorkWithUs";
import { motion } from "framer-motion";

const PaquetesPage = () => {
  return (
    <main className="paquetes--main--wrapper">
      {/* Main banner */}
      <motion.section
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        initial={{ x: 200 }}
        viewport={{ once: true }}
        className="paquetes"
      >
        <article className="graphs--wrapper" data-cursor="-black">
          <h1>
            Contamos con una infinidad de <br /> eventos realizados
          </h1>
          <div className="graphs--container">
            <div className="graph" data-cursor="-white">
              <h2>300</h2>
              <p>
                Eventos <br /> magnificos
              </p>
            </div>
            <div className="graph" data-cursor="-white">
              <h2>4500</h2>
              <p>
                Personas <br /> satisfechas
              </p>
            </div>
            <div className="graph" data-cursor="-white">
              <h2>5000</h2>
              <p>
                Equipos <br /> rentados
              </p>
            </div>
          </div>
        </article>
      </motion.section>

      {/* Separator */}
      <motion.section
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        initial={{ y: 400 }}
        viewport={{ once: true }}
        className="separator"
        data-cursor="-black"
      >
        <div className="logo--wrapper">
          <div className="separator"></div>
          <img src={whiteLogo} alt="white logo" />
          <div className="separator"></div>
        </div>
      </motion.section>

      {/* Paquetes wrapper */}
      <section className="paquetes--wrapper">
        <div className="title">
          <h1>Sabemos que todos los eventos son distintos</h1>
          <p>
            Y que pueden resultar agobiantes, por eso te ofrecemos los
            siguientes paquetes
          </p>
        </div>

        <div className="paquetes--grid">
          <motion.div
            className="paquete"
            data-cursor="-black"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Bodas</p>
          </motion.div>
          <motion.div
            className="paquete"
            data-cursor="-black"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>XV Años</p>
          </motion.div>
          <motion.div
            className="paquete"
            data-cursor="-black"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Bautisos</p>
          </motion.div>
          <motion.div
            className="paquete"
            data-cursor="-black"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Aniversarios</p>
          </motion.div>
          <motion.div
            className="paquete"
            data-cursor="-black"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Graduaciones</p>
          </motion.div>
          <motion.div
            data-cursor="-black"
            className="paquete wild"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Sociales y culturales</p>
          </motion.div>
          <motion.div
            data-cursor="-black"
            className="paquete wild2"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Celebraciones infantiles</p>
          </motion.div>
          <motion.div
            className="paquete"
            data-cursor="-black"
            whileHover={{ scale: 0.97 }}
            transition={{duration: 0.5}}
          >
            <p>Empresariales</p>
          </motion.div>
        </div>
      </section>
      <WorkWithUs />
    </main>
  );
};

export default PaquetesPage;
