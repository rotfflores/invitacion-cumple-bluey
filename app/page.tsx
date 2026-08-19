"use client";

import type { CSSProperties } from "react";

function CurvedText({ children, className, curve = 12, dip = false }: { children: string; className: string; curve?: number; dip?: boolean }) {
  const letters = Array.from(children);
  const middle = (letters.length - 1) / 2;
  return (
    <span className={className} aria-label={children} role="text">
      {letters.map((letter, index) => {
        const normalized = middle === 0 ? 0 : (index - middle) / middle;
        const offset = dip ? (1 - normalized * normalized) * curve : normalized * normalized * curve;
        const style = { "--curve-y": `${Math.round(offset)}px` } as CSSProperties;
        return <span key={`${letter}-${index}`} style={style} aria-hidden="true">{letter === " " ? "\u00a0" : letter}</span>;
      })}
    </span>
  );
}

function RibbonText({ children, direction }: { children: string; direction: "up" | "down" }) {
  const path = direction === "up" ? "M 90 142 Q 400 78 710 142" : "M 82 102 Q 400 160 718 102";
  return (
    <svg className="ribbon-copy" viewBox="0 0 800 240" preserveAspectRatio="xMidYMid meet" aria-label={children} role="img">
      <path id={`ribbon-${direction}`} d={path} fill="none" />
      <text><textPath href={`#ribbon-${direction}`} startOffset="50%" textAnchor="middle">{children}</textPath></text>
    </svg>
  );
}

export default function Home() {
  const confirmAttendance = () => {
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia al cumpleaños de Mateo 🎈");
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="invitation-page">
      <section className="hero-section" aria-label="Invitación para Mateo">
        <img className="balloons balloons-left" src="/assets/balloons-left.png" alt="" />
        <img className="balloons balloons-right" src="/assets/balloons-right.png" alt="" />
        <CurvedText className="invited" curve={7}>¡Estás invitado!</CurvedText>
        <img className="characters" src="/assets/characters.png" alt="Bluey y Bingo celebrando" />
        <figure className="ribbon ribbon-blue">
          <img src="/assets/ribbon.png" alt="" />
          <RibbonText direction="up">Cumpleaños de</RibbonText>
        </figure>
        <h1><small aria-hidden="true">🐾</small> Mateo <small aria-hidden="true">🐾</small></h1>
        <figure className="ribbon ribbon-gold">
          <img src="/assets/celebrate-ribbon.png" alt="" />
          <RibbonText direction="down">Acompáñanos a celebrar</RibbonText>
        </figure>
      </section>

      <section className="details-section" aria-label="Detalles del evento">
        <p className="date"><span>SÁBADO</span><strong>27</strong><span>AGOSTO</span></p>
        <hr aria-hidden="true" />
        <p className="event"><strong>3:00 PM A 5:00 PM</strong><span>EN CASA</span><small>CALLE Y NÚMERO<br />CIUDAD</small></p>
      </section>

      <section className="rsvp-section">
        <button type="button" onClick={confirmAttendance}>Confirmar asistencia →</button>
        <p>¡Te esperamos para jugar y celebrar!</p>
      </section>
    </main>
  );
}
