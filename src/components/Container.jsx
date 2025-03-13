import React from "react";
import Alicia from "./Alicia";
import Header from "./Header";
import Background from "./background";
import Hoja1 from "./hoja1";
import Flores1 from "./Flores1";
import Flores2 from "./Flores2";
import Hoja2 from "./hoja2";
import Direccion from "./Direccion";
import Dress from "./Dress";
import Regalo from "./Regalo";
import Hoja3 from "./hoja3";
import Hoja4 from "./hoja4";
// import Countdown from "./CuentaAtras";
import Hoja5 from "./hoja5";
import BackgroundMusic from "./musica";


export default function Container() {
  return (
    
    <div style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",     
      padding: "20px", // Padding para evitar que los elementos toquen los bordes
      boxSizing: "border-box",
    }}>
      <Background />
      <BackgroundMusic/>
      <Header />
      <Flores1 />
      <Flores2 />
      <Hoja1 />
      <Alicia />
      <Hoja2 />
      <Direccion />
      <Hoja3 />
      <Dress />
      <Hoja4 />           
      <Regalo />
      <Hoja5/>
    </div>
  );
}