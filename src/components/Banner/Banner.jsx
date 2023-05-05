import "./Banner.scss";
import coverUno from "../../images/cover-uno.png";
import coverDos from "../../images/cover-dos.png";
import { motion } from "framer-motion";
import videoOne from "../../assets/video.mp4";
import videoTwo from "../../assets/videoDos.mp4";
export default function Banner() {
  return (
    <motion.div
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      initial={{ x: -200 }}
      viewport={{ once: true }}
      className="image--wrapper"
    >
      <img src={coverUno} data-cursor-video={videoOne} />
      <img src={coverDos} data-cursor-video={videoTwo} />
      <h6>Eventos magníficos</h6>
      <h1>Enseres</h1>
    </motion.div>
  );
}
