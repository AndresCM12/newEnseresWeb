import "./HomePage.scss";
import "../../utils/scrollbar.scss";

import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurServices from "../../components/OurServices/OurServices";
import Planns from "../../components/Planns/Planns";
import WorkWithUs from "../../components/WorkWithUs/WorkWithUs";
import ClientComments from "../../components/ClientComments/ClientComments";
import SeparatorComponent from "../../components/Separator/SeparatorComponent";

export default function HomePage() {
  return (
    <div id="home-page">
      <Banner />
      <AboutUs />
      <OurServices />
      <Planns />
      <SeparatorComponent />
      <ClientComments />
      <WorkWithUs />
    </div>
  );
}
