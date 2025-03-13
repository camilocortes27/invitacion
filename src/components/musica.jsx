import { useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => console.log("Autoplay bloqueado", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 10 }}>
      <audio ref={audioRef} loop>
      <source src="/music/sunset-piano-instrumental-10407.mp3" type="audio/mp3" />
        
      </audio>
      <button
        onClick={togglePlay}
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {isPlaying ? (
          <i className="bi bi-pause-fill" style={{ fontSize: "20px" }} />
        ) : (
          <i className="bi bi-play-fill" style={{ fontSize: "20px" }} />
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;
