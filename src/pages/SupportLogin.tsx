import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SupportLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="support-page">
      <div className="support-card">
        <h1>Soporte MacroInside</h1>
        <p className="muted">Inicia sesión para gestionar tus tickets</p>
        <form onSubmit={handleSubmit} className="support-form">
          <div className="form-row">
            <label htmlFor="support-email">Email</label>
            <input
              id="support-email"
              type="email"
              placeholder="tucorreo@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="support-password">Contraseña</label>
            <input
              id="support-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
            <Link to="/" className="btn btn-ghost">
              Volver
            </Link>
          </div>
        </form>
      </div>
      {showModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setShowModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 id="modal-title">Acceso denegado</h2>
            <p>Usuario y/o contraseña no válidos</p>
            <div className="form-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportLogin;
