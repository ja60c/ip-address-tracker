import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(){
    return(
        <MapContainer style={{height:"70vh", width:"100vw", zIndex:"-1"}} center={[20.588051, -100.387571]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[20.588051, -100.387571]} zoom={10} scrollWheelZoom={false}>
                <Popup>
                    Aquí estoy
                </Popup>
            </Marker> 
        </MapContainer>    
    )

}

export default Map;
