import React, { useState } from "react";
import "./App.css";
import logoMI from "./assets/images/logo_MACROINSIDE.png";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nuevo contacto MacroInside — ${nombre || "Consulta"}`;
    const body = `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`;
    const mailto = `mailto:contacto@macroinside.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };
  return (
    <div className="mi-app">
      <header className="mi-header">
        <div className="container nav">
          <div className="brand">
            <img src={logoMI} className="brand-logo" alt="MacroInside" />
          </div>
          <nav className="menu">
            <a href="#servicios">Servicios</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#sobre">Sobre</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a href="#soporte">Soporte</a>
          </nav>
          <a href="#contacto" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <h1>Software a medida que impulsa tu negocio</h1>
              <p>
                Diseñamos y desarrollamos productos digitales de alto impacto.
                Web, móvil e integraciones modernas para acelerar tus
                operaciones.
              </p>
              <div className="cta-row">
                <a href="#servicios" className="btn btn-primary">
                  Ver servicios
                </a>
                <a href="#contacto" className="btn btn-ghost">
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section services">
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
                  Conecta tus sistemas y automatiza procesos para ganar
                  eficiencia.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="portafolio" className="section portfolio">
          <div className="container">
            <h2>Portafolio</h2>
            <p className="section-lead">Algunos proyectos y casos recientes.</p>
            <div className="grid">
              <article className="project-card">
                <div className="project-body">
                  <h3>Plataforma de e‑commerce</h3>
                  <p>
                    Arquitectura modular, pagos integrados y panel
                    administrativo con analítica en tiempo real.
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
                    Seguimiento de envíos y notificaciones push para flotas en
                    ruta.
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

        <section id="sobre" className="section about">
          <div className="container">
            <h2>Sobre MacroInside</h2>
            <p>
              Somos un equipo de ingeniería con obsesión por la calidad, la
              claridad y la entrega continua. Trabajamos cerca del negocio para
              construir software útil y mantenible.
            </p>
          </div>
        </section>

        <section id="ubicacion" className="section locations">
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

        <section id="contacto" className="section contact">
          <div className="container contact-inner">
            <h2>¿Listo para crear algo grande?</h2>
            <p>Cuéntanos sobre tu proyecto y te contactamos a la brevedad.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  placeholder="Cuéntanos sobre tu idea o necesidad"
                  rows={5}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
                <a
                  className="btn btn-ghost"
                  href="mailto:contacto@macroinside.com?subject=Consulta%20MacroInside"
                >
                  Usar correo directo
                </a>
              </div>
            </form>
          </div>
        </section>

        <section id="soporte" className="section support">
          <div className="container">
            <h2>Soporte</h2>
            <p className="section-lead">¿Necesitas ayuda con tu servicio?</p>
            <a className="btn btn-primary" href="/soporte">
              Iniciar soporte
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <img src={logoMI} className="footer-logo" alt="MacroInside" />
          <span>© 2025 MacroInside</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
