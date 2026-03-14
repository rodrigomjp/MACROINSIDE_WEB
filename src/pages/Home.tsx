import React from "react";

const Home: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>Software a medida que impulsa tu negocio</h1>
          <p>
            Diseñamos y desarrollamos productos digitales de alto impacto. Web,
            móvil e integraciones modernas para acelerar tus operaciones.
          </p>
          <div className="cta-row">
            <a href="/servicios" className="btn btn-primary">
              Ver servicios
            </a>
            <a href="/contacto" className="btn btn-ghost">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
