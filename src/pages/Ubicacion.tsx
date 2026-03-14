import React from "react";

const Ubicacion: React.FC = () => {
  return (
    <section className="section locations">
      <div className="container">
        <h2>Ubicación</h2>
        <p className="section-lead">Nuestras sedes en Chile.</p>
        <div className="locations-grid">
          <article className="card location-card">
            <h3>Negocios corporativos</h3>
            <address>
              San Francisco 294,
              <br />
              Santiago de Chile
            </address>
          </article>
          <article className="card location-card">
            <h3>Centro I+D</h3>
            <address>
              Los Manantiales 26,
              <br />
              Santo Domingo, Chile
            </address>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
