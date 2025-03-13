import React from "react";
import Countdown from "./CuentaAtras";

export default function Regalo() {
  return (
    <div
      style={{
        width: "90%", // Se adapta al tamaño del contenedor
        maxWidth: "600px", // Ancho máximo para mantener proporciones
        position: "relative", // Importante para que el Countdown se posicione dentro
        margin: "0 auto", // Centrar en la pantalla
      }}
    >
      <img
        src="/img/5a-02.png"
        alt="Regalo"
        style={{ width: "100%", height: "auto", display: "block" }} // Imagen completamente responsive
      />
      <Countdown />
    </div>
  );
}
