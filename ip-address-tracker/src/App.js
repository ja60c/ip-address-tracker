import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import Map from "./components/Map";
// import ApiRequest from "./components/ApiRequest";

import './App.css';
import "leaflet/dist/leaflet.css"

function App() {

  return (
    <>
    {/* <ApiRequest /> */}
    <Header />
    <CardInfo />
    <Map />
    </>
  );
}

export default App;