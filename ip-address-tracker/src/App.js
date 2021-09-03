import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import Map from "./components/Map";
import L from 'leaflet';

import './App.css';
import "leaflet/dist/leaflet.css"

function App() {
  return (
    <>
    <Header />
    <CardInfo />
    <Map />
    </>
  );
}

export default App;