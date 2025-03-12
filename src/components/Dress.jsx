import React from "react";

export default function Direccion() {
  return (
    <div
      style={{
        width: "80%", // Ancho relativo al contenedor
        maxWidth: "600px", // Limita el ancho máximo
        textAlign: "center", // Centra el contenido
      }}
    >
      <img
        src="/img/3a-01.png"
        alt="Dirección"
        style={{ width: "100%", height: "auto" }} // La imagen se ajusta al contenedor
      />
    </div>
  );
}