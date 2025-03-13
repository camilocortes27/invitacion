import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-25T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        
      };
    } else {
      return { days: 0, hours: 0, minutes: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "absolute", // Posicionamiento absoluto
        top: "95%", // Centrado vertical
        left: "50%", // Centrado horizontal
        transform: "translate(-50%, -50%)", // Centrado exacto
        textAlign: "center", // Texto centrado
        zIndex: 2, // Encima del componente Regalo
        color: "white", // Color del texto (ajusta según tu diseño)
        fontSize: "1.5rem", // Tamaño del texto (ajusta según tu diseño)
        display: "flex", // Usamos flexbox para alinear los números
        gap: "95px", // Espacio entre los números
        fontFamily:"Allura",
      }}
    >
      {/* Días */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft:"10px" }}>
        <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{timeLeft.days}</span>
        <span style={{ fontSize: "1rem" }}>Días</span>
      </div>

      {/* Horas */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{timeLeft.hours}</span>
        <span style={{ fontSize: "1rem" }}>Horas</span>
      </div>

      {/* Minutos */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" ,marginRight:"10px"}}>
        <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{timeLeft.minutes}</span>
        <span style={{ fontSize: "1rem" }}>Minutos</span>
      </div>

      
    </div>
  );
};

export default Countdown;