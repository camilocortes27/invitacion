import React from "react";

export default function Direccion() {
  // Función para abrir el enlace de Google Maps
  const handleClick = () => {
    window.open(
      "https://www.google.es/maps/place/Cra+83+%23+28-90,+Medell%C3%ADn,+Bel%C3%A9n,+Medell%C3%ADn,+Antioquia,+Colombia/@6.2301177,-75.6044232,17z/data=!3m1!4b1!4m6!3m5!1s0x8e442994eac5fef1:0xab3b6e570553ee78!8m2!3d6.2301124!4d-75.6018483!16s%2Fg%2F11t86d81d9?hl=es&entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
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