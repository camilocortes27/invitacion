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
        position: "absolute",
        top: "77%", // Ajusta este valor según la posición del cuadro en la imagen
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%", // Ajusta el ancho para que no se desborde
        textAlign: "center",
        zIndex: 2,
        color: "white",
        fontSize: "clamp(1rem, 4vw, 1.5rem)", // Escala según pantalla
        fontFamily: "Allura, cursive",
      }}
    >
      {/* Contenedor de tiempo */}
      {["Días", "Horas", "Minutos"].map((label, index) => {
        const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes];
        return (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1, // Hace que los elementos sean iguales en ancho
              minWidth: "60px", // Evita que se compriman demasiado
              gap: "clamp(5px, 2vw, 5px)"
            }}
          >
            <span style={{ fontSize: "clamp(1.2rem, 5vw, 1.8rem)", fontWeight: "bold" }}>
              {values[index]}
            </span>
            <span style={{ fontSize: "clamp(0.8rem, 3vw, 1rem)" }}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Countdown;
