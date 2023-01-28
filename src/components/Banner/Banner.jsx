import "./Banner.scss";
import coverUno from "../../images/cover-uno.png";
import coverDos from "../../images/cover-dos.png";
export default function Banner() {
  return (
    <div className="image--wrapper">
      <img src={coverUno} />
      <img src={coverDos} />
      <h6>Eventos magníficos</h6>
      <h1>Enseres</h1>
    </div>
  );
}
