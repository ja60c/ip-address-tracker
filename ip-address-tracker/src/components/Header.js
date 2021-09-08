import pattern from '../images/pattern.png';
import arrow from '../images/icon-arrow.svg';
import { InputGroup, Button, FormControl } from 'react-bootstrap'

import { useEffect, useState } from 'react';

// function Info(){
//     const [information, setInformation] = useState(null);
// }

// const Header = ({ handleChange, handleSubmit, typeAddress, typeText }) => {
//     const [size, setSize] = useState(window.innerWidth);
  
//     const handleResize = () => {
//       setSize(window.innerWidth);
//     };
  
//     useEffect(() => {
//       window.addEventListener("resize", handleResize);
  
//       return window.removeEventListener("resize", handleResize);
//     }, [])

function Header() {
    const [state, setstate] = useState({})

    async function fetchApi(){
        const response = await fetch(
            `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=8.8.8.8`
          )
        const json = await response.json()
        console.log(json)  
    }



    // https://geo.ipify.org/api/v1?apiKey=at_egye1KrQZbkN98oWOxr83Yvp96201&ipAddress=8.8.8.8

    // fetch(
    //     `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}ipAddress=${address}&domain=${domainName}`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       const newInfo = {
    //         ip: data.ip,
    //         location: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
    //         timezone: `UTC${data.location.timezone}`,
    //         isp: data.isp,
    //       };
    //       setInformation(newInfo);
    //       setPosition([data.location.lat, data.location.lng]);
    //       setNamePopup(data.as.name);
    //       setCountryPopup(data.location.country);
    //     })

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
        <header className="header">
            <img src={ pattern } alt="bg" className="bg" style={{width:"100vw"}} />
            <div className="container">
                <h2 className="titulo">IP Address Tracker</h2>
                <InputGroup className="mb-3">
                    <FormControl className="form"
                    placeholder="Search for any IP address or domain"
                    />
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