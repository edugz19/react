import { useState, useEffect } from "react";
import React from "react";

const retos = [
  {
    personaje: 'Julio César',
    reto: 'Julio César 007',
    descripcion: "Julio César necesita un codificador y decodificador de mensajes utilizando el sistema que él mismo inventó: Cifrado César. ¿Le echamos una mano?",
    hecho: true
  },
  {
    personaje: 'Marc Zuckerberg',
    reto: 'Redes sociales',
    descripcion: "Resolvemos el reto en el que Mark Zuckerberg, creador de Facebook, necesita un sistema para controlar que las personas que se dan de alta en sus redes sociales",
    hecho: true
  },
  {
    personaje: 'Cameron Howe',
    reto: 'Un contador de Megustas para Mutiny',
    descripcion: "Cameron Howe, protagonista de Halt and Catch Fire, necesita un contador de «Me gusta» para su comunidad online Mutiny a partir de una lista de nombres",
    hecho: false
  }
];

const NuevoReto = () => (
  <fieldset>
    <legend>Nuevo reto</legend>
    <label>Nombre del reto: </label><br />
    <input placeholder="Introduce el reto"></input>
    <br /><br />
    <label>Personaje: </label><br />
    <input placeholder="Introduce tu nombre"></input>
    <br /><br />
    <label>Descripción del reto: </label><br />
    <textarea placeholder="Introduce el reto"></textarea>
  </fieldset>
);

const ListaRetos = (props) => (
  <div>
    {props.lista.map((reto, indice) => (
      <Reto key={indice} dato={reto} />
    ))}
  </div>
);

const Reto = (props) => (
  <div>
    <h2>
      <input type="checkbox" defaultChecked={props.dato.hecho}></input>
      {props.dato.reto}
    </h2>
    <p>{props.dato.descripcion}</p>
    <h4>Encargado por: {props.dato.personaje}</h4>
    <br />
  </div>
);

const Buscar = (props) => {
  const [buscar, setBuscar] = useState('');
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  useEffect(() => {
    const resultados = props.lista.filter(reto =>
      reto.nombre.toUpperCase()
    );
    setResultadosBusqueda(resultados);
  }, [buscar, props]);
  return (
    <fieldset>
      <legend>Búsqueda de reto</legend>
      <BuscarInput buscar={buscar}
        onSearchChange={setBuscar}
      />
      <BuscarDisplay buscar={buscar}
        onClear={() => setBuscar('')}
      />
      <br />
      Retos que cumplen con la búsqueda:
      <ul>
        {resultadosBusqueda.map(item => (
          <li key={item.nombre}> {item.nombre}</li>
        ))}
      </ul>
    </fieldset>
  );
}

const BuscarInput = ({ buscar, onSearchChange }) => {
  return (
    <input
      value={buscar}
      onChange={e => onSearchChange(e.target.value)}
    />
  );
}

const BuscarDisplay = ({ buscar, onClear }) => {
  return (
    <div>
      <p>Búsqueda actual: {buscar}</p>
      <button onClick={onClear}>Limpiar busqueda</button>
    </div>
  );
}

const App = () => (
  <div>
    <Buscar lista={retos}></Buscar>
    <NuevoReto />
    <ListaRetos lista={retos} />
  </div>
)

export default App;