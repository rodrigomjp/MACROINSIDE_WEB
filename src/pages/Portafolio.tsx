import React from "react";

const Portafolio: React.FC = () => {
  return (
    <section className="section portfolio">
      <div className="container">
        <h2>Portafolio</h2>
        <p className="section-lead">Algunos proyectos y casos recientes.</p>
        <div className="grid">
          <article className="project-card">
            <div className="project-body">
              <h3>Plataforma de e‑commerce</h3>
              <p>
                Arquitectura modular, pagos integrados y panel administrativo
                con analítica en tiempo real.
              </p>
            </div>
            <div className="project-tags">
              <span>React</span>
              <span>Node</span>
              <span>Stripe</span>
            </div>
          </article>
          <article className="project-card">
            <div className="project-body">
              <h3>App móvil de logística</h3>
              <p>
                Seguimiento de envíos y notificaciones push para flotas en ruta.
              </p>
            </div>
            <div className="project-tags">
              <span>React Native</span>
              <span>Firebase</span>
            </div>
          </article>
          <article className="project-card">
            <div className="project-body">
              <h3>Automatización de reportes</h3>
              <p>
                Integración con CRM y generación de reportes semanales
                automatizados.
              </p>
            </div>
            <div className="project-tags">
              <span>Python</span>
              <span>APIs</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
