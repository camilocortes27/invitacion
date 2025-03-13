import React from "react";

export default function Header() {
  return (
    <div
      style={{
        width: "90%", // Ancho relativo al contenedor
        maxWidth: "600px", // Limita el ancho máximo
        textAlign: "center", // Centra el contenido
      }}
    >
      <img
        src="/img/1a.png"
        alt="Header"
        style={{ width: "100%", height: "auto" }} // La imagen se ajusta al contenedor
      />
    </div>
  );
}