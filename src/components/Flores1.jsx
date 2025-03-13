import React from "react";
import { motion } from "framer-motion";

export default function Flores1() {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100, rotate: -30 }} // Estado inicial (invisible, a la izquierda)
    animate={{ opacity: 1, x: 0, rotate: 0 }} // Estado final (visible, en el centro)
    transition={{
      duration: 1.5, // Duración de la animación
      repeat: Infinity, // Repetir infinitamente
      repeatType: "reverse", // Invertir la animación al repetir
      ease: "easeInOut", // Suavizado de la animación
    }}
      style={{
        position: "absolute",
        top: "1.9%", // Ajusta según la posición que desees
        left: "53%",
        transform: "translateX(-50%)",
        width: "20%", // Ancho relativo al contenedor
        maxWidth: "200px", // Limita el ancho máximo
        zIndex: 2, // Encima del Header
      }}
    >
      <img
        src="/img/flores1.png"
        alt="Flores"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
}