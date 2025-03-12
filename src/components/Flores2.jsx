import React from "react";
import { motion } from "framer-motion";

export default function Flores2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "10%", // Ajusta según la posición que desees
        left: "50%",
        transform: "translateX(-50%)",
        width: "20%", // Ancho relativo al contenedor
        maxWidth: "200px", // Limita el ancho máximo
        zIndex: 2, // Encima del Header
      }}
    >
      <img
        src="/img/flores2.png"
        alt="Flores"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
}