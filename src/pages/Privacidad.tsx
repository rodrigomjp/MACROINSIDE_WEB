import React from "react";

const FECHA_ACTUALIZACION = "13 de marzo de 2025";

const Privacidad: React.FC = () => {
  return (
    <section className="section privacy">
      <div className="container">
        <h1>Privacidad de la app</h1>
        <p className="privacy-intro">
          En MacroInside nos comprometemos con la transparencia sobre el uso de
          tus datos. Esta página describe las prácticas de privacidad de
          nuestra aplicación, tal como se exige en la sección &quot;Privacidad
          de la app&quot; del App Store.
        </p>

        <div className="privacy-block">
          <h2>Responsable del tratamiento</h2>
          <p>MacroInside es el responsable del tratamiento de los datos que se describen a continuación.</p>
        </div>

        <div className="privacy-block">
          <h2>Datos que recopilamos</h2>
          <p>
            Declaramos de forma clara qué datos recopila nuestra app y con qué
            finalidad, de acuerdo con las categorías que utiliza Apple:
          </p>
          <ul>
            <li>
              <strong>Datos vinculados a ti:</strong> información asociada a tu
              identidad (por ejemplo cuenta, correo o dispositivo), cuando
              aplique. Solo los usamos para el funcionamiento de la app y los
              servicios que ofrecemos, no para publicidad ni seguimiento entre
              apps y sitios.
            </li>
            <li>
              <strong>Datos no vinculados a ti:</strong> datos que no permiten
              identificarte de forma razonable (por ejemplo uso anónimo o
              estadísticas agregadas), cuando los utilicemos.
            </li>
            <li>
              <strong>Datos utilizados para seguimiento:</strong> nuestra app no
              utiliza datos vinculados a tu identidad para seguimiento entre
              apps y sitios web de terceros con fines publicitarios ni los
              compartimos con corredores de datos para ese fin.
            </li>
          </ul>
        </div>

        <div className="privacy-block">
          <h2>Finalidad del tratamiento</h2>
          <p>Los datos se utilizan únicamente para:</p>
          <ul>
            <li>Prestar y mejorar el funcionamiento de la app.</li>
            <li>Atender consultas y soporte cuando nos contactes.</li>
            <li>Cumplir obligaciones legales cuando sea necesario.</li>
          </ul>
        </div>

        <div className="privacy-block">
          <h2>Terceros y SDK</h2>
          <p>
            Si la app utiliza SDK de terceros (analíticas, redes publicitarias,
            etc.), aquí se describen los datos que esos terceros pueden
            recopilar y con qué finalidad. En caso de no usar servicios de
            terceros que recopilen datos personales, se indicará que no
            compartimos datos con terceros con fines de seguimiento o
            publicidad.
          </p>
        </div>

        <div className="privacy-block">
          <h2>Eliminación de cuenta</h2>
          <p>
            Si la app permite crear una cuenta, los usuarios pueden solicitar la
            eliminación de su cuenta y datos asociados. Para ello, pueden
            contactarnos usando los datos indicados más abajo. Nos comprometemos
            a procesar las solicitudes en un plazo razonable.
          </p>
        </div>

        <div className="privacy-block">
          <h2>Contacto y derechos</h2>
          <p>
            Para ejercer tus derechos (acceso, rectificación, supresión,
            portabilidad, limitación u oposición) o para cualquier pregunta sobre
            privacidad, puedes escribirnos a:{" "}
            <a href="mailto:contacto@macroinside.com">contacto@macroinside.com</a>.
          </p>
        </div>

        <div className="privacy-block privacy-updated">
          <p>
            <strong>Última actualización:</strong> {FECHA_ACTUALIZACION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacidad;
