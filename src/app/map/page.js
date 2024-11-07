// "use client"
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import log from '../../../public/logo.png';
// import axios from 'axios';

// export default function Home() {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [countryName, setCountryName] = useState('');
//   const [sidebarData, setSidebarData] = useState([]);
//   const [sidebarDataClone, setSidebarClone] = useState([]);
//   const [cardData, setCard] = useState({});
//   const [clickedData, setClickedData] = useState({ clicked: false, char: 0 });
//   const [toggle, setToggle] = useState({ toggle: false, char: 0 });
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     window.initMap = () => {
//       const mapInstance = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 20, lng: 0 },
//         zoom: 3,
//         minZoom: 3,
//         maxZoom: 7,
//         mapTypeId: 'roadmap',
//         disableDefaultUI: true,
//         streetViewControl: false,
//         fullscreenControl: false,
//         mapTypeControl: false,
//         restriction: {
//           latLngBounds: {
//             north: 85,
//             south: -85,
//             west: -180,
//             east: 180,
//           },
//           strictBounds: true,
//         },
//       });

//       setMap(mapInstance);

//       mapInstance.addListener('center_changed', () => {
//         const center = mapInstance.getCenter();
//         let lng = center.lng();
//         if (lng < -170) {
//           lng += 360;
//         } else if (lng > 180) {
//           lng -= 360;
//         }
//         if (lng !== center.lng()) {
//           mapInstance.panTo({ lat: center.lat(), lng: lng });
//         }
//       });

//       mapInstance.addListener('zoom_changed', () => {
//         if (mapInstance.getZoom() < mapInstance.get('minZoom')) {
//           mapInstance.setZoom(mapInstance.get('minZoom'));
//         }
//         if (mapInstance.getZoom() > mapInstance.get('maxZoom')) {
//           mapInstance.setZoom(mapInstance.get('maxZoom'));
//         }
//       });

//       mapInstance.addListener('click', (event) => {
//         const lat = event.latLng.lat();
//         const lng = event.latLng.lng();
//         console.log(lat, lng);

//         async function getCountryName() {
//           try {
//             const response = await axios.get(
//               `https://nominatim.openstreetmap.org/reverse?format=json&lat=${String(lat)}&lon=${String(lng)}&zoom=18&addressdetails=1`
//             );
//             console.log(response);
//             if (response.data.address.country) {
//               setCountryName(response.data.address.country);
//             }
//           } catch (err) {
//             console.log(err);
//           }
//         }
//         getCountryName();
//       });
//     };

//     return () => {
//       document.head.removeChild(script);
//       delete window.initMap;
//     };
//   }, []);

//   useEffect(() => {
//     async function getLangData() {
//       if (countryName) {
//         try {
//           const response = await axios.post(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/list-language`,
//             { country: countryName }
//           );
//           setSidebarData(response.data.languages);
//           setSidebarClone(response.data.languages);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     }

//     getLangData();
//   }, [countryName]);

//   // const handleSidebarClick = async (language) => {
//   //   try {
//   //     const response = await axios.post(
//   //       `${process.env.NEXT_PUBLIC_BASE_URL}/language-details`,
//   //       { language: language }
//   //     );

//   //     setToggle({ toggle: !toggle.toggle, char: language });
//   //     setCard(response.data.languageDetails);





//   //     console.log(response.data)
//   //     // Clear existing polygons
//   //     if (map) {
//   //       map.data.forEach((feature) => {
//   //         map.data.remove(feature);
//   //       });
//   //     }

//   //     // Add new polygons
//   //     if (response.data.polygons && map) {
//   //       response.data.polygons.forEach((polygonData) => {
//   //         polygonData.coordinates.forEach((polygon) => {
//   //           const paths = polygon.map((coord) => ({
//   //             lat: coord[1],
//   //             lng: coord[0],
//   //           }));

//   //           const newPolygon = new window.google.maps.Polygon({
//   //             paths: paths,
//   //             strokeColor: "#FF0000",
//   //             strokeOpacity: 0.8,
//   //             strokeWeight: 2,
//   //             fillColor: "#FF0000",
//   //             fillOpacity: 0.35,
//   //           });

//   //           newPolygon.setMap(map);
//   //         });
//   //       });
//   //     }
//   //   } catch (err) {
//   //     console.error("Error fetching language details:", err);
//   //   }
//   // };




//   const handleSidebarClick = async (language) => {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/language-details`,
//         { language: language }
//       );

//       setToggle({ toggle: !toggle.toggle, char: language });
//       setCard(response.data.languageDetails);

//       // Clear existing polygons
//       if (map) {
//         map.data.forEach((feature) => {
//           map.data.remove(feature);
//         });
//       }

//       // Add new polygons
//       console.log(response.data,'polygondata')
//       if (response.data.polygons && map) {
//         response.data.polygons.forEach((polygonData) => {
//           if (polygonData.coordinates && polygonData.coordinates[0] && polygonData.coordinates[0][0]) {
//             const paths = polygonData.coordinates[0][0].map((point) => {
//               const lat = parseFloat(point[1]);
//               const lng = parseFloat(point[0]);
//               if (isFinite(lat) && isFinite(lng)) {
//                 return { lat, lng };
//               }
//               return null;
//             }).filter(coord => coord !== null);

//             if (paths.length > 2) { // A polygon needs at least 3 points
//               const newPolygon = new window.google.maps.Polygon({
//                 paths: paths,
//                 strokeColor: polygonData.strokeColor || "#FF0000",
//                 strokeOpacity: 0.8,
//                 strokeWeight: 2,
//                 fillColor: polygonData.fillColor || "#FF0000",
//                 fillOpacity: 0.35,
//               });

//               newPolygon.setMap(map);
//             } else {
//               console.warn("Not enough valid coordinates to create a polygon");
//             }
//           } else {
//             console.error("Invalid polygon data structure:", polygonData);
//           }
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching language details:", err);
//     }
//   };

//   const handleAlphabetClick = (letter) => {
//     console.log("clicked");

//     const sortedData = sidebarData.filter((i) => i.startsWith(letter));
//     if (clickedData.clicked === false) {
//       if (sortedData.length > 0) {
//         setClickedData({ clicked: !clickedData.clicked, char: letter });
//         setSidebarData(sortedData);
//       }
//     } else {
//       setClickedData({ clicked: !clickedData.clicked, char: clickedData.char });
//       setSidebarData(sidebarDataClone);
//     }
//   };

//   return (
//     <div className="flex ">
//       <div className="w-[20vw] h-[100vh] bg-white flex flex-col items-center">
//         <Image src={log} className="w-11 h-11 mt-5" alt="logo" />
//         <h3 className="text-black font-semibold text-xl mt-10">Available Languages</h3>
//         <p className="text-black mt-3">Country: {countryName}</p>

//         <div className="w-full px-4 overflow-scroll">
//           {sidebarData.map((i, index) => (
//             <div
//               style={{ overflowX: 'hidden' }}
//               className={`w-full px-10 py-2 mt-5 border-2 ${
//                 toggle.toggle === true && toggle.char === i
//                   ? 'text-white bg-[#5f9253] border-green-500'
//                   : 'text-black border-slate-400'
//               } flex justify-center rounded-[0.7rem] cursor-pointer`}
//               key={index}
//               onClick={() => handleSidebarClick(i)}
//             >
//               {i}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="main">
//         <div ref={mapRef} className="w-[80vw] h-[100vh] relative" id="map"></div>
//         {sidebarData.length > 0 && (
//           <div id="overlay" className=" px-16 py-5 text-black text-[1rem] rounded-xl">
//             <div className="w-full flex gap-5 flex-wrap px-10">
//               {alphabet.split('').map((letter, index) => (
//                 <div
//                   className={`px-5 py-3 border-2 ${
//                     clickedData.clicked === true && clickedData.char === letter
//                       ? 'border-green-500 bg-[#5f9253] text-white'
//                       : 'border-slate-400 text-black'
//                   } rounded-xl cursor-pointer`}
//                   key={index}
//                   onClick={() => handleAlphabetClick(letter)}
//                 >
//                   {letter}
//                 </div>
//               ))}
//             </div>

//             {toggle.toggle && (
//   <div className="relative z-50 w-full">
//     <div className="absolute top-[40vh] bottom-0 right-[-2.6vw] overflow-scroll z-[60] w-[30vw] h-[35vh] rounded-xl px-10 bg-white">
//       <div>
//         {Object.entries(cardData).map(([key, value]) => (
//           <h2 key={key} className="text-black mt-3 text-xl">
//             {key.replace(/_/g, ' ')}: {value != null ? value.toString() : 'N/A'}
//           </h2>
//         ))}
//       </div>
//     </div>
//   </div>
// )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import log from '../../../public/logo.png';
import axios from 'axios';

// export default function Home() {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [countryName, setCountryName] = useState('');
//   const [sidebarData, setSidebarData] = useState([]);
//   const [sidebarDataClone, setSidebarClone] = useState([]);
//   const [cardData, setCard] = useState({});
//   const [clickedData, setClickedData] = useState({ clicked: false, char: 0 });
//   const [toggle, setToggle] = useState({ toggle: false, char: 0 })
//   const [sidebartoggle,setSideToggle] = useState(false)
//   const [infotoggle,setInfoToggle] = useState(false)
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     window.initMap = () => {
//       const mapInstance = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 20, lng: 0 },
//         zoom: 3,
//         minZoom: 3,
//         maxZoom: 7,
//         mapTypeId: 'roadmap',
//         disableDefaultUI: true,
//         streetViewControl: false,
//         fullscreenControl: false,
//         mapTypeControl: false,
//         restriction: {
//           latLngBounds: {
//             north: 85,
//             south: -85,
//             west: -180,
//             east: 180,
//           },
//           strictBounds: true,
//         },
//       });

//       setMap(mapInstance);

//       mapInstance.addListener('center_changed', () => {
//         const center = mapInstance.getCenter();
//         let lng = center.lng();
//         if (lng < -170) {
//           lng += 360;
//         } else if (lng > 180) {
//           lng -= 360;
//         }
//         if (lng !== center.lng()) {
//           mapInstance.panTo({ lat: center.lat(), lng: lng });
//         }
//       });

//       mapInstance.addListener('zoom_changed', () => {
//         if (mapInstance.getZoom() < mapInstance.get('minZoom')) {
//           mapInstance.setZoom(mapInstance.get('minZoom'));
//         }
//         if (mapInstance.getZoom() > mapInstance.get('maxZoom')) {
//           mapInstance.setZoom(mapInstance.get('maxZoom'));
//         }
//       });

//       mapInstance.addListener('click', (event) => {
//         const lat = event.latLng.lat();
//         const lng = event.latLng.lng();
//         console.log(lat, lng);

//         async function getCountryName() {
//           try {
//             const response = await axios.get(
//               `https://nominatim.openstreetmap.org/reverse?format=json&lat=${String(lat)}&lon=${String(lng)}&zoom=18&addressdetails=1`
//             );
//             console.log(response);
//             if (response.data.address.country) {
//               setCountryName(response.data.address.country);
              
              
//             }
//             setSideToggle(true)
//           } catch (err) {
//             console.log(err);
//           }
//         }
//         getCountryName();
//       });
//     };

//     return () => {
//       document.head.removeChild(script);
//       delete window.initMap;
//     };
//   }, []);

//   useEffect(() => {
//     async function getLangData() {
//       if (countryName) {
//         try {
//           const response = await axios.post(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/list-language`,
//             { country: countryName }
//           );
//           setSidebarData(response.data.languages);
//           setSidebarClone(response.data.languages);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     }

//     getLangData();
//   }, [countryName]);

//   const handleSidebarClick = async (language) => {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/language-details`,
//         { language: language }
//       );
  
      
//       let arr = ["id", "Sl No" , "createdAt","updatedAt"]

      
//       const filcard = {}
//       const resdata = response.data.languageDetails;

//         Object.entries(resdata).map(([key, value]) => {
          
      
          


          
          
          
//           if(!arr.includes(key.toString()) && value ){


                
                 

//             filcard[key] = value
//           }
        
        
//         }
//       )
           

//       setToggle({ toggle: !toggle.toggle, char: language });
//       setCard(response.data.languageDetails);
//       setInfoToggle(true)
      
    
//       console.log(filcard,toggle)
//       // Clear existing polygons
//       if (map) {
//         map.data.forEach((feature) => {
//           map.data.remove(feature);
//         });
//       }

//       // Add new polygons
//       if (response.data.polygons && map) {
//         response.data.polygons.forEach((polygonData, index) => {
//           if (polygonData.coordinates && Array.isArray(polygonData.coordinates)) {
//             polygonData.coordinates.forEach((coordinateSet, setIndex) => {
//               if (Array.isArray(coordinateSet) && coordinateSet.length > 0) {
//                 const paths = coordinateSet.map((point) => {
//                   if (Array.isArray(point) && point.length === 2) {
//                     const [lng, lat] = point.map(parseFloat);
//                     if (isFinite(lat) && isFinite(lng)) {
//                       return { lat, lng };
//                     }
//                   }
//                   return null;
//                 }).filter(coord => coord !== null);

//                 if (paths.length > 2) { // A polygon needs at least 3 points
//                   const newPolygon = new window.google.maps.Polygon({
//                     paths: paths,
//                     strokeColor: "#FF0000",
//                     strokeOpacity: 0.8,
//                     strokeWeight: 2,
//                     fillColor: "#FF0000",
//                     fillOpacity: 0.35,
//                   });

//                   newPolygon.setMap(map);
//                   console.log(`Created polygon for ${polygonData.state || 'Unknown State'} with ${paths.length} points`);
//                 } else {
//                   console.warn(`Not enough valid coordinates to create a polygon for set ${setIndex} in polygon ${index}. Found ${paths.length} valid points.`);
//                 }
//               } else {
//                 console.error(`Invalid coordinate set structure in polygon ${index}, set ${setIndex}:`, coordinateSet);
//               }
//             });
//           } else {
//             console.error(`Invalid polygon data structure for polygon ${index}:`, polygonData);
//           }
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching language details:", err);
//     }
//   };

//   const handleAlphabetClick = (letter) => {
//     console.log("clicked");

//     const sortedData = sidebarData.filter((i) => i.startsWith(letter));
//     if (clickedData.clicked === false) {
//       if (sortedData.length > 0) {
//         setClickedData({ clicked: !clickedData.clicked, char: letter });
//         setSidebarData(sortedData);
//       }
//     } else {
//       setClickedData({ clicked: !clickedData.clicked, char: clickedData.char });
//       setSidebarData(sidebarDataClone);
//     }
//   };

//   return (
//     <div className="flex ">

      
      
      
      
//       {sidebartoggle && (
//       <div className="w-[20vw] h-[100vh] bg-white flex flex-col items-center">
//         <Image src={log} className="w-11 h-11 mt-5" alt="logo" />
//         <h3 className="text-black font-semibold text-xl mt-10">{countryName}</h3>
//         <p className="text-black mt-3">Available Languages</p>

// {infotoggle === false ? (
//         <div className="w-full px-4 overflow-y-scroll flex justify-center">

//           <div className=" flex gap-y-5 flex-col  absolute left-3 mt-5 max-h-[69vh] overflow-y-scroll">

//             {alphabet.split('').map((letter, index) => (
//               <div
//                 className={`px-2 py-2 border-2 flex justify-center items-center ${clickedData.clicked === true && clickedData.char === letter
//                     ? 'border-green-500 bg-[#5f9253] text-white'
//                     : 'border-slate-400 text-black'
//                   } rounded-xl cursor-pointer`}
//                 key={index}
//                 onClick={() => handleAlphabetClick(letter)}
//               >
//                 {letter}
//               </div>
//             ))}
//           </div>
//           <div className='w-[40%]'>
//             {sidebarData.map((i, index) => (
//               <div
//                 style={{ overflowX: 'hidden' }}
//                 className={` px-7 py-3 mt-5 border-2 ${toggle.toggle === true && toggle.char === i
//                     ? 'text-white bg-[#5f9253] border-green-500'
//                     : 'text-black border-slate-400'
//                   } flex justify-center rounded-[0.7rem] cursor-pointer`}
//                 key={index}
//                 onClick={() => handleSidebarClick(i)}
//               >
//                 {i}
//               </div>
//             ))}
//           </div>
//         </div>
// ) : <div>
//   <div className="w-full py-5 text-black text-[1rem] rounded-xl">


//     {toggle.toggle && (
//       <div className="w-full flex flex-col items-center px-10">
//         <div className="overflow-y-scroll overflow-x-hidden  w-[16vw] h-[50vh] rounded-xl px-10 bg-white">
//           <div className='w-full'>
//             {cardData && Object.keys(cardData).length > 0 ? (
//               Object.entries(cardData).map(([key, value]) => (
//                 <h2 key={key} className="text-black mt-3 text-sm">
//                 {(value && !["id","Sl_No" , "createdAt", "updatedAt"].includes(String(key).trim())) ?  `${key.replace(/_/g, ' ')} : ${value != null ? value.toString() : "" }` : ""} 
//                 </h2>
//               ))
//             ) : (
//               <p className="text-black mt-3 text-xl">No data available</p>
//             )}
//           </div>

          
        
//         </div>


//         <button className="w-[60%] bg-red-400 text-white py-3 rounded-xl mt-3" 
//         onClick = {
//         (e)=>{
//           setToggle({ toggle: !toggle.toggle, char: 0 });
//           setInfoToggle(false)
          
//           setClickedData({ clicked: false, char: 0 })
//         }
//         }>Close</button>  
//       </div>
//     )}
//   </div>
// </div>
// }
//       </div>
//       )
//     }
//       <div className="main">
//         <div ref={mapRef} className={`${sidebartoggle ? "w-[80vw] h-[100vh] relative" : "w-[100vw] h-[100vh] relative"}`} id="map"></div>
//         {/* {sidebarData.length > 0 && (
//           <div id="overlay" className=" px-16 py-5 text-black text-[1rem] rounded-xl">
//             <div className="w-full flex gap-5 flex-wrap px-10">
//               {alphabet.split('').map((letter, index) => (
//                 <div
//                   className={`px-5 py-3 border-2 ${
//                     clickedData.clicked === true && clickedData.char === letter
//                       ? 'border-green-500 bg-[#5f9253] text-white'
//                       : 'border-slate-400 text-black'
//                   } rounded-xl cursor-pointer`}
//                   key={index}
//                   onClick={() => handleAlphabetClick(letter)}
//                 >
//                   {letter}
//                 </div>
//               ))}
//             </div>

//             {toggle.toggle && (
//               <div className="relative z-50 w-full">
//                 <div className="absolute top-[40vh] bottom-0 right-[-2.6vw] overflow-scroll z-[60] w-[30vw] h-[35vh] rounded-xl px-10 bg-white">
//                   <div>
//                     {cardData && Object.keys(cardData).length > 0 ? (
//                       Object.entries(cardData).map(([key, value]) => (
//                         <h2 key={key} className="text-black mt-3 text-xl">
//                           {key.replace(/_/g, ' ')}: {value != null ? value.toString() : 'N/A'}
//                         </h2>
//                       ))
//                     ) : (
//                       <p className="text-black mt-3 text-xl">No data available</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )} */}

       
//       </div>
//     </div>
//   );
// }


export default function Home() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [countryName, setCountryName] = useState('');
  const [sidebarData, setSidebarData] = useState([]);
  const [sidebarDataClone, setSidebarClone] = useState([]);
  const [cardData, setCard] = useState({});
  const [clickedData, setClickedData] = useState({ clicked: false, char: 0 });
  const [toggle, setToggle] = useState({ toggle: false, char: 0 })
  const [sidebartoggle, setSideToggle] = useState(false)
  const [infotoggle, setInfoToggle] = useState(false)
  const [activePolygons, setActivePolygons] = useState([]);  // New state to track polygons
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 0 },
        zoom: 3,
        minZoom: 3,
        maxZoom: 7,
        mapTypeId: 'roadmap',
        disableDefaultUI: true,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        restriction: {
          latLngBounds: {
            north: 85,
            south: -85,
            west: -180,
            east: 180,
          },
          strictBounds: true,
        },
      });

      setMap(mapInstance);

      mapInstance.addListener('center_changed', () => {
        const center = mapInstance.getCenter();
        let lng = center.lng();
        if (lng < -170) {
          lng += 360;
        } else if (lng > 180) {
          lng -= 360;
        }
        if (lng !== center.lng()) {
          mapInstance.panTo({ lat: center.lat(), lng: lng });
        }
      });

      mapInstance.addListener('zoom_changed', () => {
        if (mapInstance.getZoom() < mapInstance.get('minZoom')) {
          mapInstance.setZoom(mapInstance.get('minZoom'));
        }
        if (mapInstance.getZoom() > mapInstance.get('maxZoom')) {
          mapInstance.setZoom(mapInstance.get('maxZoom'));
        }
      });

      mapInstance.addListener('click', (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        console.log(lat, lng);

        async function getCountryName() {
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${String(lat)}&lon=${String(lng)}&zoom=18&addressdetails=1`
            );
            console.log(response);
            if (response.data.address.country) {
              setCountryName(response.data.address.country);
            }
            setSideToggle(true)
          } catch (err) {
            console.log(err);
          }
        }
        getCountryName();
      });
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  // Function to clear all polygons from the map
  const clearPolygons = () => {
    activePolygons.forEach(polygon => {
      polygon.setMap(null);
    });
    setActivePolygons([]);
  };

  useEffect(() => {
    async function getLangData() {
      if (countryName) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/list-language`,
            { country: countryName }
          );
          setSidebarData(response.data.languages);
          setSidebarClone(response.data.languages);
        } catch (err) {
          console.log(err);
        }
      }
    }

    getLangData();
  }, [countryName]);

  const handleSidebarClick = async (language) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/language-details`,
        { language: language }
      );

      let arr = ["id", "Sl No", "createdAt", "updatedAt"]
      const filcard = {}
      const resdata = response.data.languageDetails;

      Object.entries(resdata).map(([key, value]) => {
        if (!arr.includes(key.toString()) && value) {
          filcard[key] = value
        }
      });

      setToggle({ toggle: !toggle.toggle, char: language });
      setCard(response.data.languageDetails);
      setInfoToggle(true)

      console.log(filcard, toggle)
      
      // Clear existing polygons before adding new ones
      clearPolygons();

      // Add new polygons
      if (response.data.polygons && map) {
        const newPolygons = [];
        response.data.polygons.forEach((polygonData, index) => {
          if (polygonData.coordinates && Array.isArray(polygonData.coordinates)) {
            polygonData.coordinates.forEach((coordinateSet, setIndex) => {
              if (Array.isArray(coordinateSet) && coordinateSet.length > 0) {
                const paths = coordinateSet.map((point) => {
                  if (Array.isArray(point) && point.length === 2) {
                    const [lng, lat] = point.map(parseFloat);
                    if (isFinite(lat) && isFinite(lng)) {
                      return { lat, lng };
                    }
                  }
                  return null;
                }).filter(coord => coord !== null);

                if (paths.length > 2) {
                  const newPolygon = new window.google.maps.Polygon({
                    paths: paths,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35,
                  });

                  newPolygon.setMap(map);
                  newPolygons.push(newPolygon);
                  console.log(`Created polygon for ${polygonData.state || 'Unknown State'} with ${paths.length} points`);
                }
              }
            });
          }
        });
        setActivePolygons(newPolygons);
      }
    } catch (err) {
      console.error("Error fetching language details:", err);
    }
  };

  const handleAlphabetClick = (letter) => {

    const sortedData = sidebarDataClone.filter((i) => i.startsWith(letter));

    console.log("clicked",sortedData);

    if (clickedData.clicked === false && clickedData.char === 0) {
      if (sortedData.length > 0) {
        setClickedData({ clicked: true, char: letter });
        setSidebarData(sortedData);
      }
    } else {

      
      


      

      if(clickedData.char === letter){
        setClickedData({ clicked: false, char: 0 });

        setSidebarData(sidebarDataClone);
      }
      
      else{
        

        if (sortedData.length > 0) {
      setClickedData({ clicked: true, char: letter });

        setSidebarData(sortedData)
    

      }
    }
    }
  };


 


  const handleClose = () => {
    setToggle({ toggle: !toggle.toggle, char: 0 });
    setInfoToggle(false);
    setClickedData({ clicked: false, char: 0 });
    setSidebarData(sidebarDataClone);
    clearPolygons(); // Clear polygons when closing
  };

  return (
    <div className="flex">
      {sidebartoggle && (
        <div className="w-[20vw] h-[100vh] bg-white flex flex-col items-center">
          <Image src={log} className="w-11 h-11 mt-5" alt="logo" />
          <h3 className="text-black font-semibold text-xl mt-10">{countryName}</h3>
          <p className="text-black mt-3">Available Languages</p>

          {infotoggle === false ? (
            <div className="w-full px-4 overflow-y-scroll flex justify-center">
              <div className="flex gap-y-5 flex-col absolute left-3 mt-5 max-h-[40vh] overflow-y-scroll">
                {alphabet.split('').map((letter, index) => (
                  <div
                    className={`px-2 py-2 border-2 flex justify-center items-center ${clickedData.clicked === true && clickedData.char === letter
                      ? 'border-green-500 bg-[#5f9253] text-white'
                      : 'border-slate-400 text-black'
                      } rounded-xl cursor-pointer`}
                    key={index}
                    onClick={() => handleAlphabetClick(letter)}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className='w-[40%] max-h-[40vh]'>
                {sidebarData.map((i, index) => (
                  <div
                    style={{ overflowX: 'hidden' }}
                    className={`px-7 py-3 mt-5 border-2 ${toggle.toggle === true && toggle.char === i
                      ? 'text-white bg-[#5f9253] border-green-500'
                      : 'text-black border-slate-400'
                      } flex justify-center rounded-[0.7rem] cursor-pointer`}
                    key={index}
                    onClick={() => handleSidebarClick(i)}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="w-full py-5 text-black text-[1rem] rounded-xl">
                {toggle.toggle && (
                  <div className="w-full flex flex-col items-center px-10">
                    <div className="overflow-y-scroll overflow-x-hidden w-[16vw] h-[30vh] rounded-xl px-10 bg-white">
                      <div className='w-full'>
                        {cardData && Object.keys(cardData).length > 0 ? (
                          Object.entries(cardData).map(([key, value]) => (
                            <h2 key={key} className="text-black mt-3 text-sm">
                              {(value && !["id", "Sl_No", "createdAt", "updatedAt"].includes(String(key).trim())) ? `${key.replace(/_/g, ' ')} : ${value != null ? value.toString() : ""}` : ""}
                            </h2>
                          ))
                        ) : (
                          <p className="text-black mt-3 text-xl">No data available</p>
                        )}
                      </div>
                    </div>
                    <button 
                      className="w-[60%] bg-red-400 text-white py-3 rounded-xl mt-3"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="main">
        <div 
          ref={mapRef} 
          className={`${sidebartoggle ? "w-[80vw] h-[100vh] relative" : "w-[100vw] h-[100vh] relative"}`} 
          id="map"
        />
      </div>
    </div>
  );
}