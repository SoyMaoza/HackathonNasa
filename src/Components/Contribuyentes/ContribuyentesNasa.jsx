import React from 'react';
import './ContribuyentesNasa.css';

const Tabla = () => {
  const integrantes = [
    "Mario Osuna Zamora",
    "Brayan Omar Rosas Sarabia",
    "Julio Alejandro Arias Cruz",
    "Roberto Alejandro Peraza Rios",
    "Heber Israel Díaz López"
  ];

  return (
    <div className="tabla-container">
      <h2>Integrantes del Equipo</h2>
      <table className="tabla">
        <thead>
          <tr>
            <th>Integrante</th>
          </tr>
        </thead>
        <tbody>
          {integrantes.map((integrante, index) => (
            <tr key={index}>
              <td>{integrante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
