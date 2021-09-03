import CardInfo from "./CardInfo";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
// import { SearchBar } from 'react-bootstrap'
import { TileLayer, Marker, Popup, ZoomControl, MapContainer } from 'react-leaflet';

function ApiRequest() {
  const [information, setInformation] = useState(null);
  const [address, setAddress] = useState("");
  const [domainName, setDomainName] = useState("");
  const [typeText, setTypeText] = useState("");
  const [typeAddress, setTypeAddress] = useState("");
  const textValue = useRef("");
  const [position, setPosition] = useState(null);
  const [namePopup, setNamePopup] = useState("");
  const [countryPopup, setCountryPopup] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeAddress === "valid") {
      setAddress(textValue.current);
      setDomainName("");
    }

    if (typeText === "valid") {
      setDomainName(textValue.current);
      setAddress("");
    }
  };

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}ipAddress=${address}&domain=${domainName}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newInfo = {
          ip: data.ip,
          location: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
          timezone: `UTC${data.location.timezone}`,
          isp: data.isp,
        };
        setInformation(newInfo);
        setPosition([data.location.lat, data.location.lng]);
        setNamePopup(data.as.name);
        setCountryPopup(data.location.country);
      })
      .catch((err) => console.log(err));
  }, [address, domainName]);

  return (
    <div className="App h-screen xs:min-h-minitab sm:min-h-tablet md:min-h-reverse min-h-mobile">
      <header className="bg-cover text-center px-6 h-2/5 xl:h-hlg xl:min-h-desk duration-200">
        <h1 className="text-2xl font-medium text-white py-7">
          IP Address Tracker
        </h1>
        <Header
          handleSubmit={handleSubmit}
          typeAddress={typeAddress}
          typeText={typeText}
        />
        <CardInfo information={information} />
      </header>
      <main className="h-3/5 md:min-h-tab xl:h-mlg duration-200">
        <MapContainer style={{height:"70vh", width:"100vw", zIndex:"-1"}} center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} zoom={10} scrollWheelZoom={false}>
            <Popup>
              <p className="text-yellow-600 text-lg">
                {namePopup}{" "}
                <span className="text-gray-600">{countryPopup}</span>{" "}
              </p>
            </Popup>
          </Marker>
        </MapContainer>        
      </main>
    </div>
  );
}

export default ApiRequest;