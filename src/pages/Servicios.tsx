import React from "react";

const Servicios: React.FC = () => {
  return (
    <section className="section services">
      <div className="container">
        <h2>Nuestros servicios</h2>
        <p className="section-lead">
          Soluciones end-to-end, enfocadas en resultados.
        </p>
        <div className="cards">
          <article className="card">
            <h3>Desarrollo Web</h3>
            <p>
              Aplicaciones rápidas, seguras y escalables con tecnologías
              modernas.
            </p>
          </article>
          <article className="card">
            <h3>Apps Móviles</h3>
            <p>
              Experiencias nativas e híbridas, centradas en el usuario y el
              rendimiento.
            </p>
          </article>
          <article className="card">
            <h3>Integraciones & Automatización</h3>
            <p>
              Conecta tus sistemas y automatiza procesos para ganar eficiencia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
