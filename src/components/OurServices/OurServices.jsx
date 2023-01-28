import "./OurServices.scss";
import hero from "../../images/hero-uno.png";
export default function OurServices() {
  return (
    <div data-cursor="-black" className="our-services--wrapper">
      <div data-cursor="-white" className="main--wrapper">
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
      </div>
    </div>
  );
}
