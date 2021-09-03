import pattern from '../images/pattern.png';
import arrow from '../images/icon-arrow.svg';
import { InputGroup, Button, FormControl, Card } from 'react-bootstrap'

import { useEffect, useRef, useState } from 'react';

// function Info(){
//     const [information, setInformation] = useState(null);
// }

function Header() {
    return (
        <>
        <header className="header">
            <img src={ pattern } alt="bg" className="bg" style={{width:"100vw"}} />
            <div className="container">
                <h2 className="titulo">IP Address Tracker</h2>
                <InputGroup className="mb-3">
                    <FormControl className="form"
                    placeholder="Search for any IP address or domain"
                    // aria-label="Recipient's username"
                    // aria-describedby="basic-addon2"
                    />-
                    <Button variant="dark" id="button-addon2">
                    <img src={ arrow } alt="bg" />
                    </Button>
                </InputGroup>
            </div>  
        </header>
        </>   
    )
}

export default Header;