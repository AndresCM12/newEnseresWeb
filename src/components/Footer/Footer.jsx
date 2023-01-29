import "./Footer.scss";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer data-cursor="-black">
      <div className="footer-container">
        <div className="footer-left">
          <div className="text--wrapper">
            <h2>Phone Number</h2>
            <h6>+52 614 420 78 69</h6>
          </div>
          <div className="text--wrapper">
            <h2>Correo</h2>
            <h6>soporte@enseres.com</h6>
          </div>
        </div>
        <motion.div
          transition={{ ease: "easeOut", duration: 1.5 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          className="footer-right"
        >
          <h1>Enseres</h1>
        </motion.div>
      </div>
    </footer>
  );
}
