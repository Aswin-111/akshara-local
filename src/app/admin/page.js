"use client";
import { useRef, useState } from "react";
import countries from "../utils/countries.json";
import axios from "axios";
function Admin() {
  const selectRef = useRef("");
  const [country, setCountry] = useState([]);
  const [countrydetails, setDetails] = useState([]);
  const [countrywithcoords, setCountryWithCoords] = useState([]);
  const [add, setAdd] = useState(false);
  const [countryselect, setCountrySelect] = useState(false);
  const [states, setStates] = useState([]);

  return (
    <div className="px-10 py-10">
      <div className="flex gap-10">
        <select

          className="select select-bordered w-full max-w-xs "
          ref={selectRef}
          onChange={() => {
            console.log(selectRef.current.value);

            (async () => {
              const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/map/list-states`,
                {
                  country: selectRef.current.value,
                }
              );
              console.log(response.data.states)
              setStates(response.data.states);
            })();
          }}

        >
          {countries.map((i, index) => (
            <option value={i === "Select a country" ? null : i} key={index}>
              {i}
            </option>
          ))}
        </select>

        
          <select className="select select-bordered w-full max-w-xs" 
          disabled = {states.length === 0}
          
          
          >
            <option>Select a state</option>
            {states.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        
        {/* {countrydetails && (
          <button
            className="px-7 py-2 bg-blue-500 border-white border-2 rounded-xl text-white"
            onClick={() => {
              setAdd(true);
            }}
          >
            Add
          </button>
        )} */}

      </div>
    </div>
  );
}

export default Admin;
