import React from "react";

export default function Direccion() {
  // Función para abrir el enlace de Google Maps
  const handleClick = () => {
    window.open(
      "https://www.google.es/maps/place/Mi+casa+campestre+sal%C3%B3n+citrino/@6.2301743,-75.6024548,19z/data=!4m6!3m5!1s0x8e44291bfd6a7195:0xf1f5b76be7bb4f9c!8m2!3d6.2299103!4d-75.6018405!16s%2Fg%2F11y1jywyrz?hl=es&entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
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
      {/* Imagen de la dirección */}
      <img
        src="/img/3a-01.png"
        alt="Dirección"
        style={{ width: "100%", height: "auto" }} // La imagen se ajusta al contenedor
      />

      {/* Área clickeable vacía */}
      <div
        onClick={handleClick} // Abre el enlace al hacer clic
        style={{
          position: "absolute",
          top: "80.5%", // Ajusta según la posición del ícono en la imagen
          left: "49%", // Ajusta según la posición del ícono en la imagen
          transform: "translate(-50%, -50%)", // Centra el área
          width: "80px", // Ancho del área clickeable
          height: "120px", // Alto del área clickeable
          cursor: "pointer", // Cambia el cursor a una mano
          backgroundColor: "transparent", // Fondo transparente
          
          
        }}
      />
    </div>
  );
}