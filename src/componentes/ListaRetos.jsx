import Reto from "./Reto";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ListaRetos = (props) => (
    <Row>
        {props.lista.map((reto) => (
            <Col sm={4}>
                <Reto key={reto.reto} dato={reto} />
            </Col>
        ))}
    </Row>
);

export default ListaRetos;
