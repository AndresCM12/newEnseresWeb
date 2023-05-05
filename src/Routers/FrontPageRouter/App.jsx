import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import IntroScreen from "../../pages/WelcomePage/index";
import HomeApp from "../../pages/InfoWrapperPage/Root/HomeApp";
import HomePage from "../../pages/InfoWrapperPage/Home/HomePage";
import ServiciosPage from "../../pages/InfoWrapperPage/Servicios/ServiciosPage";
import PaquetesPage from "../../pages/InfoWrapperPage/Paquetes/PaquetesPage";

MouseFollower.registerGSAP(gsap);

function MainRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route id="InfoWrapperPage" path="" element={<HomeApp />}>
          <Route path="inicio" element={<HomePage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="paquetes" element={<PaquetesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
