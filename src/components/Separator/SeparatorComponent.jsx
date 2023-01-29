import "./SeparatorComponent.scss";
import logoImage from "../../images/logo.png";
import { motion } from "framer-motion";

export default function SeparatorComponent() {
  return (
    <motion.div
      transition={{ ease: "easeOut", duration: 1.5 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className="separator--wrapper"
    >
      <div className="separator--container">
        <div className="separator--line"></div>
        <img src={logoImage} alt="logo" />
        <div className="separator--line"></div>
      </div>
    </motion.div>
  );
}
