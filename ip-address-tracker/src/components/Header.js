import pattern from '../images/pattern.png';
import arrow from '../images/icon-arrow.svg';
import { Container, InputGroup, Button, FormControl } from 'react-bootstrap'

function Header() {
    return (
        <>
        <img src={ pattern } alt="bg" />
        <Container className="container">
            <h2 className="titulo">IP Address Tracker</h2>
            <InputGroup className="mb-3">
                <FormControl className="form"
                placeholder="Search for any IP address or domain"
                // aria-label="Recipient's username"
                // aria-describedby="basic-addon2"
                />
                <Button variant="dark" id="button-addon2">
                <img src={ arrow } alt="bg" />
                </Button>
            </InputGroup>
        </Container>
        </>   
    )
}

export default Header;