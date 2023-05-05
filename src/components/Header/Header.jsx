import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import "./Header.scss";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const el = headerRef.current;
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(el);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      initial={{ y: -100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <h1
        onClick={() => {
          //wait until the page is scrolled to the top
          window.scrollTo({ top: 0, behavior: "smooth", duration: 0.5 });
          if (!window.location.href.includes("/inicio")) {
            if (window.scrollY > 0) {
              setTimeout(() => {
                window.location.href = "/inicio";
              }, 600);
              return;
            }

            window.location.href = "/inicio";
          }
        }}
      >
        Enseres
      </h1>
      <nav>
        <ul>
          <li
            data-cursor-text="Ir"
            onClick={() => {
              //wait until the page is scrolled to the top
              window.scrollTo({ top: 0, behavior: "smooth", duration: 0.5 });
              if (!window.location.href.includes("/inicio")) {
                if (window.scrollY > 0) {
                  setTimeout(() => {
                    window.location.href = "/inicio";
                  }, 600);
                  return;
                }
    
                window.location.href = "/inicio";
              }
            }}
          >
            Inicio
          </li>
          {/* <li data-cursor-text="Ir">
            <Link to={"/servicios"}>Servicios</Link>
          </li> */}
          <li
            data-cursor-text="Ver"
            className="selected"
            onClick={() => {
              //wait until the page is scrolled to the top
              window.scrollTo({ top: 0, behavior: "smooth", duration: 0.5 });
              if (!window.location.href.includes("/paquetes")) {
                if (window.scrollY > 0) {
                  setTimeout(() => {
                    window.location.href = "/paquetes";
                  }, 600);
                  return;
                }
    
                window.location.href = "/paquetes";
              }
            }}
          >
            <p style={{ color: "white", cursor: "pointer" }}>Paquetes</p>
          </li>
        </ul>
        <motion.div style={{ scaleX: scrollYProgress }} />
      </nav>
    </motion.header>
  );
}
