import React from "react";
import Countdown from "./CuentaAtras";

export default function Regalo() {
  return (
    <div
      style={{
        width: "80%", // Ancho relativo al contenedor
        maxWidth: "600px", // Limita el ancho máximo
        position: "relative", // Para posicionar el Countdown
        textAlign: "center", // Centra el contenido
      }}
    >
      <img
        src="/img/5a-01.png"
        alt="Regalo"
        style={{ width: "100%", height: "auto" }} // La imagen se ajusta al contenedor
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px", // Espacio entre componentes
          padding: "20px", // Padding para evitar que los elementos toquen los bordes
          boxSizing: "border-box",
        }}
      >
        <Countdown />
      </div>
    </div>
  );
}