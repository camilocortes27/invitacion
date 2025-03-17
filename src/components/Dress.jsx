import React from "react";

export default function Dress() {
  // Función para abrir el formulario de Google
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe6jl97MyDg4_RtmsC9O6L01KgWNTFV3SHjnU8ify8J2ReYMA/viewform?usp=dialog",
      "_blank" // Abre en una nueva pestaña
    );
  };

  return (
    <div
      style={{
        position: "relative", // Para posicionar el área clickeable
        width: "90%", // Ancho relativo al contenedor
        maxWidth: "600px", // Limita el ancho máximo
        textAlign: "center", // Centra el contenido
      }}
    >
      {/* Imagen del Dress */}
      <img
        src="/img/4-01.png"
        alt="Dress"
        style={{ width: "100%", height: "auto" }} // La imagen se ajusta al contenedor
      />

      {/* Área clickeable vacía */}
      <div
        onClick={handleClick} // Abre el formulario al hacer clic
        style={{
          position: "absolute",
          top: "93.6%", // Ajusta según la posición del ícono en la imagen
          left: "51%", // Ajusta según la posición del ícono en la imagen
          transform: "translate(-50%, -50%)", // Centra el área
          width: "110px", // Ancho del área clickeable
          height: "100px", // Alto del área clickeable
          cursor: "pointer", // Cambia el cursor a una mano
          backgroundColor: "transparent", // Fondo transparente
        
          
          
        }}
      />
    </div>
  );
}