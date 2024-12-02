import React, { useEffect, useState } from 'react';
import './TablaDeExoplanetas.css'; // Asegúrate de importar el CSS

const TablaDeExoplanetas = () => {
  const [exoplanetas, setExoplanetas] = useState([]);
  const [distanciaMax, setDistanciaMax] = useState('');
  const [error, setError] = useState(null);

  // Función para obtener exoplanetas
  const obtenerExoplanetas = async (distanciaMax) => {
    const apiUrl = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition%20like%20'CANDIDATE'%20and%20koi_period>300%20and%20koi_prad<2&order=koi_period&format=json";

    try {
      const respuesta = await fetch(apiUrl);

      if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
      }

      const data = await respuesta.json();

      // Filtrar los exoplanetas por distancia
      const exoplanetasFiltrados = data.filter(planeta => {
        const distancia = planeta.koi_distance ? parseFloat(planeta.koi_distance) : Infinity; // Asegúrate de que esta propiedad exista
        return !distanciaMax || distancia <= parseFloat(distanciaMax); // Convierte distanciaMax a número
      });

      setExoplanetas(exoplanetasFiltrados);
      setError(exoplanetasFiltrados.length === 0 ? "No se encontraron exoplanetas." : null);
    } catch (error) {
      setError(`Error al cargar los exoplanetas: ${error.message}`);
    }
  };

  // Carga inicial
  useEffect(() => {
    obtenerExoplanetas();
  }, []);

  // Maneja el evento de clic en el botón de filtrado
  const filtrarExoplanetas = () => {
    obtenerExoplanetas(distanciaMax);
  };

  return (
    <div className='tabla-exoplanetas'>
      <h1>Tabla de Exoplanetas</h1>
      <input 
        type="number" 
        id="distancia" 
        value={distanciaMax} 
        onChange={(e) => setDistanciaMax(e.target.value)} 
        placeholder="Distancia máxima (años luz)" 
      />
      <button id="filtrar" onClick={filtrarExoplanetas}>
        Filtrar
      </button>

      {error ? (
        <p>{error}</p>
      ) : (
        <table id="exoplanetas">
          <thead>
            <tr>
              <th>Nombre del Exoplaneta</th>
              <th>Periodo Orbital (días)</th>
              <th>Radio Planetario (radios terrestres)</th>
              <th>Temperatura de Equilibrio (K)</th>
              <th>Distancia (años luz)</th>
            </tr>
          </thead>
          <tbody>
            {exoplanetas.map((planeta, index) => (
              <tr key={index}>
                <td>{planeta.kepler_name || planeta.koi_pdisposition}</td>
                <td>{planeta.koi_period}</td>
                <td>{planeta.koi_prad}</td>
                <td>{planeta.koi_teq}</td>
                <td>{planeta.koi_distance ? planeta.koi_distance : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TablaDeExoplanetas;
