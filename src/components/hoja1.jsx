import React from "react";
import { motion } from "framer-motion";

export default function Hoja1() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, rotate: -30 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: "absolute",
        top: "40%", // Ajusta según la posición que desees
        left: "5%",
        width: "15%", // Ancho relativo al contenedor
        maxWidth: "150px", // Limita el ancho máximo
        zIndex: 1,
      }}
    >
      <img
        src="/img/hojitas.png"
        alt="Hoja 1"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
}