import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

const NuevoReto = ({ onNewReto }) => {
    const [newPersonajeReto, setNewPersonajeReto] = useState("");
    const [newNombreReto, setNewNombreReto] = useState("");
    const [newDescripcionReto, setNewDescripcionReto] = useState("");

    function manejarClick(e) {
        e.preventDefault();
        onNewReto({
            hecho: false,
            personaje: newPersonajeReto,
            reto: newNombreReto,
            descripcion: newDescripcionReto,
        });
    }

    return (
        <Form>
            <fieldset className="border border-dark rounded p-3 mb-4 bg-light shadow">
                <legend>Nuevo reto</legend>
                <FormGroup>
                    <FormLabel>Nombre del reto: </FormLabel>
                    <FormControl
                        placeholder="Introduce el reto"
                        value={newNombreReto}
                        onChange={(e) => setNewNombreReto(e.target.value)}
                    ></FormControl>
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel>Personaje: </FormLabel>
                    <FormControl
                        placeholder="Introduce tu nombre"
                        value={newPersonajeReto}
                        onChange={(e) => setNewPersonajeReto(e.target.value)}
                    ></FormControl>
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel>Descripción del reto: </FormLabel>
                    <FormControl
                        as="textarea"
                        placeholder="Introduce el reto"
                        value={newDescripcionReto}
                        onChange={(e) => setNewDescripcionReto(e.target.value)}
                    ></FormControl>
                </FormGroup>
                <br />
                <Button variant="success" onClick={manejarClick}>Crear nuevo reto</Button>
            </fieldset>
        </Form>
    );
};

export default NuevoReto;
