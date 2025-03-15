import React from "react";
import Countdown from "./CuentaAtras";

export default function Regalo() {
  return (
    <div
      style={{
        width: "100%", // Ahora ocupa todo el ancho disponible
        maxWidth: "600px", // Máximo de 600px en pantallas grandes
        position: "relative",
        margin: "0 auto", // Centrado
        padding: "0 15px", // Padding para mayor flexibilidad
        boxSizing: "border-box", // Asegura que el padding no afecte el ancho total
      }}
    >
      <img
        src="/img/5a-03.png"
        alt="Regalo"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover", // Mantiene la proporción de la imagen
        }}
      />
      <Countdown />
    </div>
  );
}
