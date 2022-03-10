import Button from 'react-bootstrap/Button';

const BuscarDisplay = ({ buscar, onClear }) => {
    return (
        <div>
            <p>Búsqueda actual: {buscar}</p>
            <Button variant="primary" onClick={onClear}>Limpiar busqueda</Button>
        </div>
    );
};

export default BuscarDisplay;