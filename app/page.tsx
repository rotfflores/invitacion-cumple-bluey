"use client";

export default function Home() {
  const confirmAttendance = () => {
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia al cumpleaños 🎈");
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="page-shell">
      <article className="invitation" aria-label="Invitación de cumpleaños">
        <section className="phone-hero" aria-label="Invitación para Mateo">
          <img className="side-balloons left-side" src="/assets/balloons-left.png" alt="" />
          <img className="side-balloons right-side" src="/assets/balloons-right.png" alt="" />
          <div className="ornamental-card">
            <img className="ornamental-frame" src="/assets/ornamental-frame.png" alt="" />
            <div className="hero-copy">
              <p className="invited">¡Estás invitado!</p>
              <img className="characters" src="/assets/characters.png" alt="Bluey y Bingo celebrando" />
              <div className="birthday-ribbon">
                <img src="/assets/ribbon.png" alt="" />
                <span>Cumpleaños de</span>
              </div>
              <h1><span aria-hidden="true">🐾</span> Mateo <span aria-hidden="true">🐾</span></h1>
              <p className="join-us">Acompáñanos a celebrar</p>
            </div>
          </div>
        </section>
        <section className="details" aria-label="Detalles del evento">
          <div className="date-block"><span>SÁBADO</span><strong>27</strong><span>AGOSTO</span></div>
          <div className="rule" aria-hidden="true" />
          <div className="event-block">
            <strong>3:00 PM A 5:00 PM</strong><span>EN CASA</span>
            <p>CALLE Y NÚMERO<br />CIUDAD</p>
          </div>
        </section>
        <button className="rsvp" type="button" onClick={confirmAttendance}>Confirmar asistencia <span aria-hidden="true">→</span></button>
        <p className="footer-note">¡Te esperamos para jugar y celebrar!</p>
      </article>
    </main>
  );
}
