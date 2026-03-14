import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupportLogin from "./pages/SupportLogin";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Portafolio from "./pages/Portafolio";
import Sobre from "./pages/Sobre";
import Ubicacion from "./pages/Ubicacion";
import Contacto from "./pages/Contacto";
import Privacidad from "./pages/Privacidad";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="portafolio" element={<Portafolio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="ubicacion" element={<Ubicacion />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="privacidad" element={<Privacidad />} />
        </Route>
        <Route path="/soporte" element={<SupportLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
