import React from "react";
import { motion } from "framer-motion";

export default function Flores1() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, rotate: -30 }} // Estado inicial
      animate={{ opacity: 1, x: 0, rotate: 0 }} // Estado final
      transition={{
        duration: 2.5, // Duración de la animación
        repeat: Infinity, // Repetir infinitamente
        repeatType: "reverse", // Invertir la animación al repetir
        ease: "easeInOut", // Suavizado de la animación
      }}
      style={{
        position: "absolute",
        top: "3%", // Ajusta según la posición que desees
        left: "70%", // Ajusta según la posición que desees
        width: "15%", // Ancho relativo al contenedor
        maxWidth: "180px", // Limita el ancho máximo
        zIndex: 2, // Encima del Header
      }}
    >
      <img
        src="/img/flores1.png"
        alt="Flores 1"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
}