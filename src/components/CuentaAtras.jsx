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
        top: "77%", 
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%", 
        textAlign: "center",
        zIndex: 2,
        color: "white",
        fontSize: "clamp(1rem, 3vw, 1.5rem)", // 🔹 Ajuste de tamaño de texto responsive
        fontFamily: "Allura, cursive",
        gap: "clamp(2px, 1.5vw, 10px)", // 🔹 Reduce espacio entre números en móviles
      }}
    >
      {[  
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
      ].map(({ label, value }) => (
        <div
          key={label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "clamp(50px, 20vw, 120px)", // 🔹 Más pequeño en móviles, más grande en desktop
            margin: "-2px",
          }}
        >
          <span style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)", fontWeight: "bold" }}>
            {value}
          </span>
          <span style={{ fontSize: "clamp(0.7rem, 2.5vw, 1rem)" }}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
