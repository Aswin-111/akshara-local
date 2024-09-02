// "use client";

// import { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import log from '../../public/logo.png';

// const data = {
//   "polygons": [
//     {
//       "coordinates": [
//         [74.86743335224068, 12.823163087236154],
//         [74.92576137484386, 12.547692987426657],
//         [75.26941304142085, 11.991322437409721],
//         [75.58375942331338, 11.532017875284595],
//         [75.94998064654968, 10.724557903006996],
//         [76.1936215307353, 10.24100147962659],
//         [76.31347371282413, 9.53001959801621],
//         [76.46207918471669, 9.140338984323606],
//         [76.65188308306818, 8.776600386971339],
//         [76.76046025493127, 8.547192944257262],
//         [76.95122538743146, 8.384017516428898],
//         [77.18348005100802, 8.314386705942852],
//         [77.37622422482593, 8.716745612380407],
//         [77.17104899541312, 8.92106043427647],
//         [77.25320636153504, 9.028467719875678],
//         [77.37812944793114, 9.350113872616362],
//         [77.36570264538068, 9.565222289047114],
//         [77.1877698024955, 9.620109551341102],
//         [77.20295301991729, 9.848351667300918],
//         [77.28742014931424, 10.130051924651056],
//         [77.23425986534676, 10.345378077587853],
//         [76.90447055183267, 10.292975294536873],
//         [76.85202877956556, 10.629419795991211],
//         [76.79917132723688, 10.88516965482846],
//         [76.52776105638475, 11.289809602039014],
//         [76.35097047082309, 11.532899491783809],
//         [76.4484740031458, 11.695032781298892],
//         [76.13354056695368, 11.911687905677056],
//         [75.63914524781427, 12.10145491508311],
//         [75.28202958763353, 12.631902181970247],
//         [74.86743335224068, 12.823163087236154]
//       ],
//       "strokeColor": "#FF0000",
//       "fillColor": "#FF0000"
//     },
//     {
//       "coordinates": [
//         [76.68178937304685, 21.279740957721074],
//         [77.01132387028366, 21.94679522509601],
//         [78.04516381092026, 21.625746355420887],
//         [78.54164690512329, 21.153876649277123],
//         [78.26950430180091, 20.142869883065856],
//         [77.40473052880134, 20.015945909907316],
//         [76.49378520895061, 20.48769331609384],
//         [77.27125656017841, 21.03137481034014],
//         [76.62712127365228, 21.277852970202403]
//       ],
//       "strokeColor": "#FF0000",
//       "fillColor": "#FF0000"
//     }
//   ]
// }

// export default function Home() {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     

//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     // window.initMap = () => {
//     //   const map = new window.google.maps.Map(mapRef.current, {
//     //     center: { lat: 20, lng: 0 },
//     //     zoom: 3,
//     //     minZoom: 3,
//     //     maxZoom: 7,
//     //     mapTypeId: 'roadmap',
//     //     streetViewControl: false,
//     //     fullscreenControl: false,
//     //     mapTypeControl: false,
//     //     restriction: {
//     //       latLngBounds: {
//     //         north: 85,
//     //         south: -85,
//     //         west: -180,
//     //         east: 180,
//     //       },
//     //       strictBounds: true,
//     //     },
//     //   });

//     //   // Optionally, you can add a listener to ensure zoom restrictions
//     //   map.addListener('zoom_changed', () => {
//     //     if (map.getZoom() < map.get('minZoom')) {
//     //       map.setZoom(map.get('minZoom'));
//     //     }
//     //     if (map.getZoom() > map.get('maxZoom')) {
//     //       map.setZoom(map.get('maxZoom'));
//     //     }
//     //   });
//     // };
//     window.initMap = () => {
//       const map = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 20, lng: 0 },
//         zoom: 3,
//         minZoom: 3,
//         maxZoom: 7,
//         mapTypeId: 'roadmap',
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

//       // Add event listener for center_changed
//       map.addListener('center_changed', () => {
//         const center = map.getCenter();
//         let lng = center.lng();

//         // Check if the longitude is out of bounds
//         if (lng < -170) {
//           lng += 360;
//         } else if (lng > 180) {
//           lng -= 360;
//         }

//         // If the longitude has changed, pan the map
//         if (lng !== center.lng()) {
//           map.panTo({ lat: center.lat(), lng: lng });
//         }
//       });

//       // Keep the existing zoom_changed listener
//       map.addListener('zoom_changed', () => {
//         if (map.getZoom() < map.get('minZoom')) {
//           map.setZoom(map.get('minZoom'));
//         }
//         if (map.getZoom() > map.get('maxZoom')) {
//           map.setZoom(map.get('maxZoom'));
//         }
//       });
//     };
//     return () => {
//       document.head.removeChild(script);
//       delete window.initMap;
//     };
//   }, []);

//   return (
//     <div className='flex'>
// <div className='w-[20vw] h-[100vh] bg-white flex flex-col items-center'>
//   <Image src = {log}  className = "w-11 h-11 mt-5" />
//   <h3 className='text-black font-semibold text-xl mt-10'>Available Languages</h3>

// </div>

//     <div
//       ref={mapRef}
//       className="w-[80vw] h-[100vh]"
//     >

//     </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import log from "../../public/logo.png";

import axios from "axios";


export default function Home() {
  const mapRef = useRef(null);
  const [countryName, setCountryName] = useState("");
  const [clickeditem, setClicked] = useState("");
  const [sidebardata, setSidebarData] = useState([]);
  const [sidebardataclone, setSidebarClone] = useState([]);
  const [carddata, setCard] = useState({})
  const [clickedData, setClickedData] = useState({ clicked: false, char: 0 });

  const [toggle, setToggle] = useState({ toggle: false, char: 0 });
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 0 },
        zoom: 3,
        minZoom: 3,
        maxZoom: 7,
        mapTypeId: "roadmap",
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

      // Add event listener for center_changed
      map.addListener("center_changed", () => {
        const center = map.getCenter();
        let lng = center.lng();

        // Check if the longitude is out of bounds
        if (lng < -170) {
          lng += 360;
        } else if (lng > 180) {
          lng -= 360;
        }

        // If the longitude has changed, pan the map
        if (lng !== center.lng()) {
          map.panTo({ lat: center.lat(), lng: lng });
        }
      });

      // Keep the existing zoom_changed listener
      map.addListener("zoom_changed", () => {
        if (map.getZoom() < map.get("minZoom")) {
          map.setZoom(map.get("minZoom"));
        }
        if (map.getZoom() > map.get("maxZoom")) {
          map.setZoom(map.get("maxZoom"));
        }
      });



      // Add click event listener to get country name
      
      map.addListener("click", (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        console.log(lat, lng);

        async function getCountryName() {
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${String(
                lat
              )}&lon=${String(lng)}&zoom=18&addressdetails=1`
            );
            console.log(response);

            if (response.data.address.country) {
              setCountryName(response.data.address.country);
            }
          } catch (err) {
            console.log(err);
          }
        }
        getCountryName();
      });
       data.polygons.forEach((polygonData) => {
        const polygon = new window.google.maps.Polygon({
          paths: polygonData.coordinates.map(([lng, lat]) => ({ lat, lng })),
          strokeColor: polygonData.strokeColor,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: polygonData.fillColor,
          fillOpacity: 0.35,
        });

        polygon.setMap(map);
      });
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    async function getLangData() {
      console.log(process.env.NEXT_PUBLIC_BASE_URL, "djfsiod");
      if (countryName) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/getlangbycountry`,
          { country: countryName }
        );
        console.log("response : server ", response.data.data);

        setSidebarData(response.data.data);
      }
    }

    getLangData();
  }, [countryName]);

  useEffect(()=>{
    const data = {
      "language" : "malayalam",
      "polygons": [
        {
          "coordinates": [
            [74.86743335224068, 12.823163087236154],
            [74.92576137484386, 12.547692987426657],
            [75.26941304142085, 11.991322437409721],
            [75.58375942331338, 11.532017875284595],
            [75.94998064654968, 10.724557903006996],
            [76.1936215307353, 10.24100147962659],
            [76.31347371282413, 9.53001959801621],
            [76.46207918471669, 9.140338984323606],
            [76.65188308306818, 8.776600386971339],
            [76.76046025493127, 8.547192944257262],
            [76.95122538743146, 8.384017516428898],
            [77.18348005100802, 8.314386705942852],
            [77.37622422482593, 8.716745612380407],
            [77.17104899541312, 8.92106043427647],
            [77.25320636153504, 9.028467719875678],
            [77.37812944793114, 9.350113872616362],
            [77.36570264538068, 9.565222289047114],
            [77.1877698024955, 9.620109551341102],
            [77.20295301991729, 9.848351667300918],
            [77.28742014931424, 10.130051924651056],
            [77.23425986534676, 10.345378077587853],
            [76.90447055183267, 10.292975294536873],
            [76.85202877956556, 10.629419795991211],
            [76.79917132723688, 10.88516965482846],
            [76.52776105638475, 11.289809602039014],
            [76.35097047082309, 11.532899491783809],
            [76.4484740031458, 11.695032781298892],
            [76.13354056695368, 11.911687905677056],
            [75.63914524781427, 12.10145491508311],
            [75.28202958763353, 12.631902181970247],
            [74.86743335224068, 12.823163087236154]
          ],
          "strokeColor": "#FF0000",
          "fillColor": "#FF0000"
        },
        {
          "coordinates": [
            [76.68178937304685, 21.279740957721074],
            [77.01132387028366, 21.94679522509601],
            [78.04516381092026, 21.625746355420887],
            [78.54164690512329, 21.153876649277123],
            [78.26950430180091, 20.142869883065856],
            [77.40473052880134, 20.015945909907316],
            [76.49378520895061, 20.48769331609384],
            [77.27125656017841, 21.03137481034014],
            [76.62712127365228, 21.277852970202403]
          ],
          "strokeColor": "#FF0000",
          "fillColor": "#FF0000"
        }
      ]
    };
  },[])
  return (
    <div className="flex ">
      <div className="w-[20vw] h-[100vh] bg-white flex flex-col items-center">
        <Image src={log} className="w-11 h-11 mt-5" />
        <h3 className="text-black font-semibold text-xl mt-10">
          Available Languages
        </h3>
        <p className="text-black mt-3">Country : {countryName}</p>

        <div className="w-full px-4  overflow-scroll">
          {sidebardata &&
            sidebardata.map((i, index) => {
              return (
                <div
                  className={
                    toggle.toggle === true && toggle.char === index
                      ? "w-full px-10 py-2 mt-5 border-2 text-white flex justify-center rounded-[0.7rem] bg-[#5f9253] cursor-pointer"
                      : "w-full px-10 py-2 mt-5 border-2 text-black flex justify-center rounded-[0.7rem] cursor-pointer"
                  }
                  key={index}
                  onClick={(e) => {
                    // Alphabets: "";
                    // Census_Year: "";
                    // Countries: "India";
                    // Current_Status: "Endangered";
                    // Family: " Sino-Tibetan";
                    // Genus: "";
                    // ISO_639_3: "";
                    // Latitude: "";
                    // Longitude: "";
                    // Macroarea: "Arunachal Pradesh";
                    // Name: "Adi";
                    // Num_of_speakers: "79327";
                    // Other_Names: "Adi, Adi-Gallong, Adi-Galo, Gallong, Galo, Galong";
                    // Reference: "https://en.wikipedia.org/wiki/Adi_people, https://www.ethnologue.com/language/adl/, https://scriptsource.org/cms/scripts/page.php?item_id=language_detail&key=adl";
                    // Script: false;
                    // Sl_No: 1;
                    // Sub_Languages: "";
                    // Tribal_Language: false;
                    // Using_Scripts: "Latin ";
                    // WALS_code: ""
                    (async function () {
                      const response = await axios.post(
                        "http://localhost:5000/api/getdetails",
                        {
                          target: i.Name,
                        }
                      );
                      setToggle({ toggle: !toggle.toggle, char: index });
                      
                      console.log(response.data);
                    
                      


                      
                      
                      
                      
                      
                      setCard({...response.data.data})
                    })();
                  }}
                >
                  {i.Name}
                </div>
              );
            })}
        </div>
      </div>

      <div className="main">
        {" "}
        <div
          ref={mapRef}
          className="w-[80vw] h-[100vh] relative"
          id="map"
        ></div>
        {sidebardata.length > 0 && (
          <div
            id="overlay"

            // className='bg-white px-16 py-5 text-black text-[1rem] rounded-xl'>
          >
            {/* {countryName && countryName} */}

            <div className="w-full flex  gap-5 flex-wrap px-10">
              {alphabet.split("").map((letter, index) => (
                <div
                  className={
                    clickedData.clicked === true && clickedData.char === index
                      ? "px-5 py-3 border-2 border-green-500 rounded-xl text-white bg-[#5f9253] cursor-pointer"
                      : "px-5 py-3 border-2  border-slate-400 rounded-xl text-black cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    const sorted_data = sidebardata.filter((i) =>
                      i.Name.startsWith(letter)
                    );
                    console.log(sorted_data);
                    if (clickedData.clicked === false) {
                      if (sorted_data.length > 0) {
                        setClickedData({
                          clicked: !clickedData.clicked,
                          char: index,
                        });

                        console.log(sorted_data, "sorted data");

                        setSidebarClone([...sidebardata]);
                        setSidebarData([...sorted_data]);
                      } else {
                      }
                    } else {
                      setClickedData({
                        clicked: !clickedData.clicked,
                        char: index,
                      });

                      setSidebarData([...sidebardataclone]);
                    }
                  }}
                >
                  {letter}
                </div>
              ))}



            

          
          
          
        
        

        
        
        
        {toggle.toggle && <div className="relative z-50 w-full">
          
<div className="absolute top-[40vh] bottom-0 right-[-2.6vw] overflow-scroll z-[60] w-[30vw] h-[35vh] rounded-xl px-10 bg-white">
  
<div>
  {carddata.Name && (
    <h1 className="text-black mt-3 text-xl">Name : {carddata.Name}</h1>
  )}
  {carddata.Alphabets && (
    <h2 className="text-black mt-3 text-xl">Alphabets : {carddata.Alphabets}</h2>
  )}
  {carddata.Census_Year && (
    <h2 className="text-black mt-3 text-xl">Census Year : {carddata.Census_Year}</h2>
  )}
  {carddata.Countries && (
    <h2 className="text-black mt-3 text-xl">Countries : {carddata.Countries}</h2>
  )}
  {carddata.Current_Status && (
    <h2 className="text-black mt-3 text-xl">Current Status : {carddata.Current_Status}</h2>
  )}
  {carddata.Family && (
    <h2 className="text-black mt-3 text-xl">Family : {carddata.Family}</h2>
  )}
  {carddata.Genus && (
    <h2 className="text-black mt-3 text-xl">Genus : {carddata.Genus}</h2>
  )}
  {carddata.ISO_639_3 && (
    <h2 className="text-black mt-3 text-xl">ISO 639-3 : {carddata.ISO_639_3}</h2>
  )}
  {carddata.Latitude && (
    <h2 className="text-black mt-3 text-xl">Latitude : {carddata.Latitude}</h2>
  )}
  {carddata.Longitude && (
    <h2 className="text-black mt-3 text-xl">Longitude : {carddata.Longitude}</h2>
  )}
  {carddata.Macroarea && (
    <h2 className="text-black mt-3 text-xl">Macroarea : {carddata.Macroarea}</h2>
  )}
  {carddata.Num_of_speakers && (
    <h2 className="text-black mt-3 text-xl">Number of Speakers : {carddata.Num_of_speakers}</h2>
  )}
  {carddata.Other_Names && (
    <h2 className="text-black mt-3 text-xl">Other Names : {carddata.Other_Names}</h2>
  )}
  {/* {carddata.Reference && (
    <h2 className="text-black mt-3 text-xl">Reference : {carddata.Reference}</h2>
  )} */}
  {carddata.Script && (
    <h2 className="text-black mt-3 text-xl">Script : {carddata.Script.toString()}</h2>
  )}
  {carddata.Sl_No && (
    <h2 className="text-black mt-3 text-xl">SL No : {carddata.Sl_No}</h2>
  )}
  {carddata.Sub_Languages && (
    <h2 className="text-black mt-3 text-xl">Sub Languages : {carddata.Sub_Languages}</h2>
  )}
  {carddata.Tribal_Language && (
    <h2 className="text-black mt-3 text-xl">Tribal Language : {carddata.Tribal_Language.toString()}</h2>
  )}
  {carddata.Using_Scripts && (
    <h2 className="text-black mt-3 text-xl">Using Scripts : {carddata.Using_Scripts}</h2>
  )}
  {carddata.WALS_code && (
    <h2 className="text-black mt-3 text-xl">WALS Code : {carddata.WALS_code}</h2>
  )}
</div>
  </div>
          </div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
