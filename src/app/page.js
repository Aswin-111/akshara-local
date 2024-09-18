"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import log from '../../public/logo.png';
import axios from 'axios';

export default function Home() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [countryName, setCountryName] = useState('');
  const [sidebarData, setSidebarData] = useState([]);
  const [sidebarDataClone, setSidebarClone] = useState([]);
  const [cardData, setCard] = useState({});
  const [clickedData, setClickedData] = useState({ clicked: false, char: 0 });
  const [toggle, setToggle] = useState({ toggle: false, char: 0 });
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

  // const handleSidebarClick = async (language) => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/language-details`,
  //       { language: language }
  //     );

  //     setToggle({ toggle: !toggle.toggle, char: language });
  //     setCard(response.data.languageDetails);



  

  //     console.log(response.data)
  //     // Clear existing polygons
  //     if (map) {
  //       map.data.forEach((feature) => {
  //         map.data.remove(feature);
  //       });
  //     }

  //     // Add new polygons
  //     if (response.data.polygons && map) {
  //       response.data.polygons.forEach((polygonData) => {
  //         polygonData.coordinates.forEach((polygon) => {
  //           const paths = polygon.map((coord) => ({
  //             lat: coord[1],
  //             lng: coord[0],
  //           }));

  //           const newPolygon = new window.google.maps.Polygon({
  //             paths: paths,
  //             strokeColor: "#FF0000",
  //             strokeOpacity: 0.8,
  //             strokeWeight: 2,
  //             fillColor: "#FF0000",
  //             fillOpacity: 0.35,
  //           });

  //           newPolygon.setMap(map);
  //         });
  //       });
  //     }
  //   } catch (err) {
  //     console.error("Error fetching language details:", err);
  //   }
  // };




  const handleSidebarClick = async (language) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/language-details`,
        { language: language }
      );
  
      setToggle({ toggle: !toggle.toggle, char: language });
      setCard(response.data.languageDetails);
  
      // Clear existing polygons
      if (map) {
        map.data.forEach((feature) => {
          map.data.remove(feature);
        });
      }
  
      // Add new polygons
      if (response.data.polygons && map) {
        response.data.polygons.forEach((polygonData) => {
          if (polygonData.coordinates && polygonData.coordinates[0] && polygonData.coordinates[0][0]) {
            const paths = polygonData.coordinates[0][0].map((point) => {
              const lat = parseFloat(point[1]);
              const lng = parseFloat(point[0]);
              if (isFinite(lat) && isFinite(lng)) {
                return { lat, lng };
              }
              return null;
            }).filter(coord => coord !== null);
  
            if (paths.length > 2) { // A polygon needs at least 3 points
              const newPolygon = new window.google.maps.Polygon({
                paths: paths,
                strokeColor: polygonData.strokeColor || "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: polygonData.fillColor || "#FF0000",
                fillOpacity: 0.35,
              });
  
              newPolygon.setMap(map);
            } else {
              console.warn("Not enough valid coordinates to create a polygon");
            }
          } else {
            console.error("Invalid polygon data structure:", polygonData);
          }
        });
      }
    } catch (err) {
      console.error("Error fetching language details:", err);
    }
  };
  
  const handleAlphabetClick = (letter) => {
    console.log("clicked");

    const sortedData = sidebarData.filter((i) => i.startsWith(letter));
    if (clickedData.clicked === false) {
      if (sortedData.length > 0) {
        setClickedData({ clicked: !clickedData.clicked, char: letter });
        setSidebarData(sortedData);
      }
    } else {
      setClickedData({ clicked: !clickedData.clicked, char: clickedData.char });
      setSidebarData(sidebarDataClone);
    }
  };

  return (
    <div className="flex ">
      <div className="w-[20vw] h-[100vh] bg-white flex flex-col items-center">
        <Image src={log} className="w-11 h-11 mt-5" alt="logo" />
        <h3 className="text-black font-semibold text-xl mt-10">Available Languages</h3>
        <p className="text-black mt-3">Country: {countryName}</p>

        <div className="w-full px-4 overflow-scroll">
          {sidebarData.map((i, index) => (
            <div
              style={{ overflowX: 'hidden' }}
              className={`w-full px-10 py-2 mt-5 border-2 ${
                toggle.toggle === true && toggle.char === i
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

      <div className="main">
        <div ref={mapRef} className="w-[80vw] h-[100vh] relative" id="map"></div>
        {sidebarData.length > 0 && (
          <div id="overlay" className=" px-16 py-5 text-black text-[1rem] rounded-xl">
            <div className="w-full flex gap-5 flex-wrap px-10">
              {alphabet.split('').map((letter, index) => (
                <div
                  className={`px-5 py-3 border-2 ${
                    clickedData.clicked === true && clickedData.char === letter
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

            {toggle.toggle && (
  <div className="relative z-50 w-full">
    <div className="absolute top-[40vh] bottom-0 right-[-2.6vw] overflow-scroll z-[60] w-[30vw] h-[35vh] rounded-xl px-10 bg-white">
      <div>
        {Object.entries(cardData).map(([key, value]) => (
          <h2 key={key} className="text-black mt-3 text-xl">
            {key.replace(/_/g, ' ')}: {value != null ? value.toString() : 'N/A'}
          </h2>
        ))}
      </div>
    </div>
  </div>
)}
          </div>
        )}
      </div>
    </div>
  );
}