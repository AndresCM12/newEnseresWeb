import "./Planns.scss";

export default function Planns() {
  return (
    <div className="planns--wrapper">
      <div className="main--wrapper">
        <div className="title--wrapper">
          <h1>Nos ajustamos a</h1>
          <h1>tus necesidades</h1>
        </div>
        <div className="planns--container">
          <div data-cursor="-black" className="plann">
            <h3>Enseres</h3>
            <h3>Eventos</h3>
            <div className="divider"></div>
            <p>
              Disfruta de un evento completamente hermoso rodeado de tus
              invitados disfrutando del lugar.
            </p>
            <div
              data-cursor-text="Ir!"
              data-cursor-stick=".button"
              className="button"
              data-cursor="-white"
            >
              Contratar{" "}
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </div>
          </div>
          <div data-cursor="-black" className="plann">
            <h3>Enseres</h3>
            <h3>Empresarial</h3>
            <div className="divider"></div>
            <p>
              Disfruta de un evento increíble rodeado de esas personas que día a
              día te están apoyando.
            </p>
            <div
              data-cursor-text="Ir!"
              data-cursor-stick=".button.right"
              className="button right"
              data-cursor="-white"
            >
              Más información{" "}
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
