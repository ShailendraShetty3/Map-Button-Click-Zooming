
// --------------------------------------important  dont delete -------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// import "./styles.css";

// import {FireSensorIcon} from './MapIcons';


// function Markers({ data }) {
//   const map = useMap();
//   return (
//     data.length > 0 &&
//     data.map((marker, index) => {
//       return (
//         <Marker
//           eventHandlers={{
//             click: () => {
//               map.setView(
//                 [
//                   marker.geometry.coordinates[1],
//                   marker.geometry.coordinates[0]
//                 ],
//                 14
//               );
//             }
//           }}
//           key={index}
//           position={{
//             lat: marker.geometry.coordinates[1],
//             lng: marker.geometry.coordinates[0]
//           }}
//           icon={FireSensorIcon}
//         >
//           <Popup>
//             <span>{marker.properties.label}</span>
//           </Popup>
//         </Marker>
//       );
//     })
//   );
// }

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
//       .then((response) => response.json())
//       .then((response) => {
//         setData(response.features);
//       });
//   }, []);

//   return (
//     <MapContainer
//       center={[47.217324, 13.097555]}
//       zoom={4}
//       scrollWheelZoom={false}
//       style={{ height: "100vh" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       <Markers data={data} />
//     </MapContainer>
//   );
// }




import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.css";

import {FireSensorIcon} from './MapIcons';


function Markers({ data }) {

  const map = useMap();
  return (
    data.length > 0 &&
    data.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.setView(
                [
                  marker.geometry.coordinates[1],
                  marker.geometry.coordinates[0]
                ],
                14
              );
            }
          }}
          key={index}
          position={{
            lat: marker.geometry.coordinates[1],
            lng: marker.geometry.coordinates[0]
          }}
          icon={FireSensorIcon}
        >
          <Popup>
            <span>{marker.properties.label}</span>
          </Popup>
        </Marker>
      );
    })
  );
}



// function Zooming() {
//     const map = useMap();
//         return (
//             <>
//               return (
//                 <Marker
//             eventHandlers={{
//               click: () => {
//                 map.setView(
//                     [23.825292, 90.620816],
//                   16
//                 );
//               }
//             }}
//             position={[23.825292, 90.620816]}
//             icon={FireSensorIcon}
//           >
//             {console.log("inside the zooming function")}
//             <Popup>
//               <span>gggggggggggggggggg</span>
//             </Popup>
//           </Marker>
//               );
//               </>
//           );

//   }



function Zooming() {
    const map = useMap();
  
    useEffect(() => {
      map.setView([23.825292, 90.620816], 16);
    }, [map]);
  
    return null;
  }

  
  
  

export default function App() {
  const [data, setData] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(false)

  const handleZoom=()=>{
    setZoomLevel(!zoomLevel);
  }

  useEffect(() => {
    fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
      .then((response) => response.json())
      .then((response) => {
        setData(response.features);
      });
  }, []);

  return (
    <MapContainer
      center={[47.217324, 13.097555]}
      zoom={4}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <div style={{position:"absolute", marginLeft:"5vw", marginTop:"15vh", zIndex:999}}>
        <button style={{width:"75px",height:"35px", backgroundColor:"blue"}}
        onClick={handleZoom}
        >Button</button>
        
      </div>
      

      <Markers data={data} />
      {zoomLevel == true &&<Zooming />}
    </MapContainer>
  );
}

