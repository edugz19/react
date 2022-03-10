import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form, FormControl } from "react-bootstrap";

const Reto = (props) => {
    const [modPersonajeReto, setPersonajeReto] = useState(props.dato.personaje);
    const [modNombreReto, setNombreReto] = useState(props.dato.reto);
    const [modDescripcionReto, setDescripcionReto] = useState(
        props.dato.descripcion
    );
    const [modificando, setModificando] = useState(false);

    function manejarClick(e) {
        e.preventDefault();
        props.dato.personaje = modPersonajeReto;
        props.dato.reto = modNombreReto;
        props.dato.descripcion = modDescripcionReto;
        setModificando(false);
    }

    const [hecho, setHecho] = useState(props.dato.hecho); //dentro de useState podemos poner por defecto false,
    if (modificando) {
        return (
            <Card>
                <Form>
                    <Card.Header onClick={() => setHecho(!hecho)}>
                        {hecho ? "" : ""}&nbsp;
                        <Form.Control
                            value={modNombreReto}
                            onChange={(e) => setNombreReto(e.target.value)}
                        />
                    </Card.Header>
                    <Card.Body>
                        <FormControl
                            as="textarea"
                            onChange={(e) => setDescripcionReto(e.target.value)}
                            defaultValue={modDescripcionReto}
                        ></FormControl>
                        <br />
                        <blockquote className="blockquote mb-0">
                            Encargado por:
                            <FormControl
                                value={modPersonajeReto}
                                onChange={(e) =>
                                    setPersonajeReto(e.target.value)
                                }
                            />
                        </blockquote>
                        <br />
                        <Button variant="danger" onClick={manejarClick}>
                            Guardar reto
                        </Button>
                    </Card.Body>
                </Form>
            </Card>
        );
    } else {
        return (
            <Card>
                <Card.Header as="h3" onClick={() => setHecho(!hecho)}>
                    {hecho ? "" : ""}&nbsp;
                    {props.dato.reto}
                </Card.Header>
                <Card.Body>
                    <Card.Text>{props.dato.descripcion}</Card.Text>
                    <br />
                    <h4 className="blockquote-footer">
                        Encargado por: {props.dato.personaje}
                    </h4>
                    <Button
                        variant="warning"
                        onClick={() => setModificando(true)}
                    >
                        Modificar reto
                    </Button>
                </Card.Body>
            </Card>
        );
    }
};

export default Reto;
