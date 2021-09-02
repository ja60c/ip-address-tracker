import pattern from '../images/pattern.png';
import arrow from '../images/icon-arrow.svg';
import { InputGroup, Button, FormControl, Card } from 'react-bootstrap'

function Header() {
    return (
        <>
        <header className="header">
            <img src={ pattern } alt="bg" className="bg"/>
            <div className="container">
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
            </div>  
        </header>
        <Card className="d-flex flex-row">
            <Card.Body className="col-2 p-3 bg-primary">
                <Card.Title>IP Address</Card.Title>
                <Card.Text>
                192.212.173.101
                </Card.Text>
            </Card.Body>
            <Card.Body className="col-2 p-3 bg-warning">
                <Card.Title>Location</Card.Title>
                <Card.Text>
                Brooklyn, NY
                </Card.Text>
            </Card.Body>
            <Card.Body className="col-2 p-3 bg-info">
                <Card.Title>Timezone</Card.Title>
                <Card.Text>
                UTC-05:00
                </Card.Text>
            </Card.Body>
            <Card.Body className="col-2 p-3 bg-danger">
                <Card.Title>ISP</Card.Title>
                <Card.Text>
                Space X Starlink
                </Card.Text>
            </Card.Body>
        </Card> 
        </>   
    )
}

export default Header;