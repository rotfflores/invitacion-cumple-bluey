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
  const path = direction === "up" ? "M 82 130 Q 400 62 718 130" : "M 72 108 Q 400 190 728 108";
  return (
    <svg className="ribbon-copy" viewBox="0 0 800 240" preserveAspectRatio="xMidYMid meet" aria-label={children} role="img">
      <path id={`ribbon-${direction}`} d={path} fill="none" />
      <text><textPath href={`#ribbon-${direction}`} startOffset="50%" textAnchor="middle">{children}</textPath></text>
    </svg>
  );
}

function Paw() {
  return <svg className="paw-icon" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="42" rx="17" ry="14"/><ellipse cx="13" cy="28" rx="7" ry="9" transform="rotate(-24 13 28)"/><ellipse cx="25" cy="16" rx="7" ry="9" transform="rotate(-8 25 16)"/><ellipse cx="39" cy="16" rx="7" ry="9" transform="rotate(8 39 16)"/><ellipse cx="51" cy="28" rx="7" ry="9" transform="rotate(24 51 28)"/></svg>;
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
        <h1><Paw /> Mateo <Paw /></h1>
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
