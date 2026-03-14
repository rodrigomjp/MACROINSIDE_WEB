import React, { useState } from "react";

const Contacto: React.FC = () => {
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
  );
};

export default Contacto;
