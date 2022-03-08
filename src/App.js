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
    {props.lista.map((reto) => (
      <Reto dato={reto} />
    ))}
  </div>
);

const Reto = (props) => (
  <div>
    <h2>
      <input type="checkbox" defacultChecked={props.dato.hecho}></input>
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
  //Solamente cuando cambia [buscar] hacemos el renderizado
  useEffect(() => {
  //En results guardamos todos los retos cuyo nombre sea 
  const resultados = props.lista.filter(reto =>
  reto.nombre.toUpperCase().includes(buscar.toUpperCase())
  );
  setResultadosBusqueda(resultados);
  //Añado props para que cuando cambie la lista de retos también se actualice
  }, [buscar, props]);
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