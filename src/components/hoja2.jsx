import React from "react";
import { motion } from "framer-motion";

export default function Hoja2() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, rotate: 30 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 1 }}
      style={{
        position: "absolute",
        top: "60%", // Ajusta según la posición que desees
        right: "5%",
        width: "15%", // Ancho relativo al contenedor
        maxWidth: "150px", // Limita el ancho máximo
        zIndex: 1,
      }}
    >
      <img
        src="/img/hojitas2.png"
        alt="Hoja 2"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
}