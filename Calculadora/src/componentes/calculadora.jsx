import React, { useState } from "react";
import "./calculadora.css";

function Calculadora() {
  const [pantalla, setPantalla] = useState("");
  const [resultado, setResultado] = useState("");

  const manejarClick = (valor) => {
    setPantalla((pantalla) => pantalla + valor);
  };

  const calcularResultado = () => {
    try {
      setResultado(eval(pantalla));
    } catch (error) {
      setResultado("Error");
    }
  };

  const limpiarPantalla = () => {
    setPantalla("");
    setResultado("");
  };

  return (
    <div className="ContenedorCalculadora">
      <div className="Calculadora">
        <div className="Pantalla">
          <input type="text" value={pantalla} disabled className="Entrada" />
          <div className="Resultado">{resultado}</div>
        </div>
        <div className="Botones">
          <button onClick={() => limpiarPantalla()} className="Boton Limpiar">C</button>
          <button onClick={() => manejarClick("7")} className="Boton">7</button>
          <button onClick={() => manejarClick("8")} className="Boton">8</button>
          <button onClick={() => manejarClick("9")} className="Boton">9</button>
          <button onClick={() => manejarClick("/")} className="Boton Operador">÷</button>
          <button onClick={() => manejarClick("4")} className="Boton">4</button>
          <button onClick={() => manejarClick("5")} className="Boton">5</button>
          <button onClick={() => manejarClick("6")} className="Boton">6</button>
          <button onClick={() => manejarClick("*")} className="Boton Operador">x</button>
          <button onClick={() => manejarClick("1")} className="Boton">1</button>
          <button onClick={() => manejarClick("2")} className="Boton">2</button>
          <button onClick={() => manejarClick("3")} className="Boton">3</button>
          <button onClick={() => manejarClick("-")} className="Boton Operador">-</button>
          <button onClick={() => manejarClick("0")} className="Boton">0</button>
          <button onClick={() => manejarClick(".")} className="Boton">.</button>
          <button onClick={() => calcularResultado()} className="Boton Operador">=</button>
          <button onClick={() => manejarClick("+")} className="Boton Operador">+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
