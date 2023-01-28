import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <h1>Enseres</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>Servicios</Link>
          </li>
          <li className="selected">
            <Link to={"/empresarial"}>Empresarial</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
