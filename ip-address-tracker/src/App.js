import Header from "./components/Header";
import Map from "./components/Map";
import L from 'leaflet';

import './App.css';
import "leaflet/dist/leaflet.css"

function App() {
  return (
    <>
    <Header />
    <Map />
    </>
  );
}

export default App;