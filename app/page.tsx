"use client";

export default function Home() {
  const confirmAttendance = () => {
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia al cumpleaños 🎈");
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="page-shell">
      <article className="invitation" aria-label="Invitación de cumpleaños">
        <div className="spot spot-1" /><div className="spot spot-2" />
        <div className="spot spot-3" /><div className="spot spot-4" />
        <div className="spot spot-5" /><div className="spot spot-6" />
        <header className="hero">
          <p className="eyebrow">ESTE EPISODIO ES DE</p>
          <h1>¡MI CUMPLE!</h1>
        </header>
        <div className="balloon-scene" aria-hidden="true">
          <div className="balloon orange left"><span /></div>
          <div className="balloon blue center"><span /></div>
          <div className="balloon orange right"><span /></div>
          <div className="confetti c1" /><div className="confetti c2" />
          <div className="confetti c3" /><div className="confetti c4" />
          <div className="confetti c5" /><div className="confetti c6" />
          <div className="party-burst">🎉</div>
        </div>
        <section className="celebrant">
          <h2>NOMBRE</h2>
          <p>cumple <strong>2</strong> años</p>
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
