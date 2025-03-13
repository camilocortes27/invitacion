import React from "react";

export default function Alicia() {
  return (
    <div
      style={{
        width: "90%", // Ancho relativo al contenedor
        maxWidth: "600px", // Limita el ancho máximo
        textAlign: "center", // Centra el contenido
      }}
    >
      <img
        src="/img/2a-01.png"
        alt="Alicia"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}