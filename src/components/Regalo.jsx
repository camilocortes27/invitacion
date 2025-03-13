import React from "react";


export default function Regalo() {
  return (
    <div
      style={{
        width: "90%", // Ancho relativo al contenedor
        maxWidth: "600px", // Limita el ancho máximo
        position: "relative", // Para posicionar el Countdown
        textAlign: "center", // Centra el contenido
        margin: "0 auto", // Centra el componente horizontalmente
      }}
    >
      <img
        src="/img/5a-01.png"
        alt="Regalo"
        style={{ width: "100%", height: "auto" }} // La imagen se ajusta al contenedor
      />
    </div>
  );
}