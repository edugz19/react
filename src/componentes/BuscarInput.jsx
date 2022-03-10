import Form from "react-bootstrap/Form";

const BuscarInput = ({ buscar, onSearchChange }) => (
    <Form>
        <Form.Control
            value={buscar}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    </Form>
);

export default BuscarInput;
