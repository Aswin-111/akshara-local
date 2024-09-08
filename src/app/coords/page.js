"use client";
import { useEffect, useRef, useState } from "react";
import countries from "../utils/countries.json";
import axios from "axios";
function Admin() {
  const selectRef = useRef("");
  const stateRef = useRef("");
  const coordsRef = useRef("");

  const [country, setCountry] = useState([]);
  const [countrydetails, setDetails] = useState([]);
  const [countryfetch, setCountryFetch] = useState([]);
  const [countrywithcoords, setCountryWithCoords] = useState([]);
  const [add, setAdd] = useState(false);
  const [countryselect, setCountrySelect] = useState(false);

  














  
  useEffect(()=>{

    (async ()=>{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL/coords}`)

  
    


      // console.log(response,'hi')
      
    
      setCountryFetch(response.data.data[0])
    })()
  },[])
  return (
    <div className="px-10 py-10">
      <div className="flex justify-around">
        <select
          className="select select-bordered w-full max-w-xs "
          ref={selectRef}
          onChange={() => {
            console.log(selectRef.current.value);

            (async () => {
              const response = await axios.post(
                `http://localhost:5000/api/getcoords`,
                {
                  country: selectRef.current.value,
                }
              );

              console.log(response.data.data[0]);
              setDetails(response.data.data[0]);
            })();
          }}
        >
          {countries.map((i, index) => (
            <option value={i === "Select a country" ? null : i} key={index}>
              {i}
            </option>
          ))}
        </select>

        {countrydetails.length > 0 && (
          <select
            className="select select-bordered w-full max-w-xs"
            ref={stateRef}
          >
            <option>Select a state</option>
            {countrydetails.map((i, index) => (
              <option value={i.State} key={index}>
                {i.State}
              </option>
            ))}
          </select>
        )}

{countrydetails.length > 0 &&  <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          ref={coordsRef}
        />
}
       
       
{countrydetails.length > 0 &&  <button
          className="px-7 py-2 bg-blue-500 border-white border-2 rounded-xl text-white"
          onClick={() => {
            setAdd(true);

            const coords = coordsRef.current.value;

            const country = selectRef.current.value;

            const state = stateRef.current.value;

            console.log(Array(coords), country, state);

            if(Array(coords).length > 0){

              (async function (){


                
                
              
                // const coordsArray = coords.split(';').map(pair => pair.split(',').map(Number));
                
          
                let sample = await axios.post('http://localhost:5000/api/setcoords',{
                
                  country,
                  state,
                  coords : coords
                })

                
                
                console.log(sample)
              })()
            }
          }}
        >
          Add
        </button>
}
      </div>
        
      <div className="overflow-x-auto w-full mt-10 flex justify-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
         {countryfetch.map((i,index)=>{
          return(
            <tr>
              
             
              <td>{i.Name}</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
         )}
        )
      }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
