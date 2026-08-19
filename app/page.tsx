"use client";

import { useEffect, useState, type CSSProperties } from "react";

const EVENT_TIME = new Date("2026-10-17T13:00:00-06:00").getTime();

function getCountdown() {
  const distance = Math.max(0, EVENT_TIME - Date.now());
  return {
    días: Math.floor(distance / 86400000),
    horas: Math.floor((distance / 3600000) % 24),
    minutos: Math.floor((distance / 60000) % 60),
    segundos: Math.floor((distance / 1000) % 60),
  };
}

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
  const path = direction === "up" ? "M 82 130 Q 400 62 718 130" : "M 72 112 Q 400 198 728 112";
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
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

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

      <section className="countdown-section" aria-label="Cuenta regresiva para el cumpleaños">
        <h2><Paw /> Cuenta regresiva <Paw /></h2>
        <ol className="countdown-grid">
          {Object.entries(countdown).map(([label, value]) => (
            <li className="time-unit" key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="reception-section" aria-label="Información de la recepción">
        <h2>Recepción</h2>
        <article className="reception-schedule">
          <p><span className="event-icon" aria-hidden="true">🗓️</span><strong>Sábado</strong><small>17 de octubre<br />de 2026</small></p>
          <p><span className="event-icon" aria-hidden="true">🕐</span><strong>1:00 p. m.</strong><small>Hora de inicio</small></p>
          <a className="map-button" href="https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n+El+Para%C3%ADso+Av.+Las+Flores+123+Ciudad+Jard%C3%ADn" target="_blank" rel="noreferrer">📍 Ver mapa</a>
        </article>
        <article className="venue-card">
          <img src="/assets/reception-castle.png" alt="Castillo azul de la recepción" />
          <h3>Salón El Paraíso</h3>
          <p>Av. Las Flores 123<br />Ciudad Jardín</p>
        </article>
      </section>

      <section className="dress-code-section" aria-label="Código de vestimenta">
        <h2>Código de vestimenta</h2>
        <p><strong>Colores:</strong><br />azul, naranja y crema</p>
      </section>

      <section className="gift-section" aria-label="Mesa de regalos">
        <h2>Mesa de regalos</h2>
        <img src="/assets/gift-box.png" alt="Regalo azul con moño dorado" />
        <p>Tu presencia es nuestro mejor regalo. Si deseas hacernos un obsequio, habrá mesa de regalos.<strong>Gracias de corazón</strong></p>
      </section>
    </main>
  );
}
