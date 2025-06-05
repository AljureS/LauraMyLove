import React, { useState } from "react";
import "./App.css";

function App() {
  // Estado para saber si Laura ya aceptó (“Sí”)
  const [accepted, setAccepted] = useState(false);

  // Estado para la posición (top, left) del botón “No” una vez que se haya movido
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });

  // Estado booleano que indica si el botón “No” ya fue movido
  const [moved, setMoved] = useState(false);

  // Función que corre al hacer clic en “Sí”
  const handleYesClick = () => {
    setAccepted(true);
  };

  // Función que corre al hacer clic en “No”
  const handleNoClick = () => {
    // Generar valores aleatorios entre 10% y 80% para top/left
    const newTop = Math.floor(Math.random() * 70 + 10) + "%";
    const newLeft = Math.floor(Math.random() * 70 + 10) + "%";

    setNoPosition({ top: newTop, left: newLeft });
    setMoved(true);
  };

  // Si ya aceptó, mostrar otro contenido (puede ser otro componente)
  if (accepted) {
    return (
      <div className="accepted-container">
        <div>
          <img src="Si.gif" alt="Siii" />
        </div>
        <h1>¡Siiiiiiiiiiiiiii!</h1>
        {/* <p></p> */}
        {/* Por ejemplo: <OtroComponente /> */}
      </div>
    );
  }

  // Pantalla principal (pregunta + botones)
  return (
    <section className="main-container">
      <h1>¿Quieres ser mi novia?</h1>
        <img src="bob-esponja.gif" alt="by" />
      

      <div className="buttons-wrapper">
        {/* Botón “Sí” siempre en flujo normal (flex) */}
        <div id="si-button">
          <button onClick={handleYesClick}>Sí</button>
        </div>

        {/*
          Si moved == false, renderizamos “No” en el flujo flex junto al “Sí”.
          Si moved == true, renderizamos “No” con position:absolute en la posición aleatoria.
        */}
        {!moved ? (
          <div id="no-button">
            <button onClick={handleNoClick}>No</button>
          </div>
        ) : (
          <div
            id="no-button"
            style={{
              position: "absolute",
              top: noPosition.top,
              left: noPosition.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <button onClick={handleNoClick}>No</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
