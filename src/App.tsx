import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import logoMI from "./assets/images/logo_MACROINSIDE.png";

function App() {
  return (
    <div className="mi-app">
      <header className="mi-header">
        <div className="container nav">
          <div className="brand">
            <img src={logoMI} className="brand-logo" alt="MacroInside" />
          </div>
          <nav className="menu">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/ubicacion">Ubicación</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/soporte">Soporte</Link>
          </nav>
          <Link to="/contacto" className="btn btn-primary">
            Hablemos
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <img src={logoMI} className="footer-logo" alt="MacroInside" />
          <span>© 2025 MacroInside</span>
          <Link to="/privacidad">Privacidad</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
