import {  useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import "./App.scss";
import Header from "../../components/Header/Header";

import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);

function App() {
  let navigate = useNavigate();
  let cursor = null;
  useEffect(() => {
    if (cursor === null) {
      cursor = new MouseFollower({
        el: null,
        container: document.body,
        className: "mf-cursor",
        innerClassName: "mf-cursor-inner",
        textClassName: "mf-cursor-text",
        mediaClassName: "mf-cursor-media",
        mediaBoxClassName: "mf-cursor-media-box",
        iconSvgClassName: "mf-svgsprite",
        iconSvgNamePrefix: "-",
        iconSvgSrc: "",
        dataAttr: "cursor",
        hiddenState: "-hidden",
        textState: "-text",
        iconState: "-icon",
        activeState: "-active",
        mediaState: "-media",
        stateDetection: {
          "-pointer": "a,button",
          "-hidden": "iframe",
        },
        visible: true,
        visibleOnState: false,
        speed: 0.75,
        ease: "expo.out",
        skewing: 0,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 0.5,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.05,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300,
      });
    }
    navigate("/home");
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
