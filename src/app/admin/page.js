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
                `http://localhost:5000/api/getallcountrydetails`,
                {
                  country: selectRef.current.value,
                }
              );

              setDetails(response.data.data);
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
          <select className="select select-bordered w-full max-w-xs">
            <option>Select a language</option>
            {countrydetails.map((i, index) => (
              <option value={i === "Select a Language" ? null : i} key={index}>
                {i.Name}
              </option>
            ))}
          </select>
        )}
        {countrydetails.length > 0 && (
          <button
            className="px-7 py-2 bg-blue-500 border-white border-2 rounded-xl text-white"
            onClick={() => {
              setAdd(true);
            }}
          >
            Add
          </button>
        )}

        {add && (
          <div className="w-[30vw] flex">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={() => {
                setCountrySelect(true);
              }}
            >
              <option>Select a country</option>
            </select>

            <select className="select select-bordered w-full max-w-xs">
              <option>Select state</option>
            </select>
          </div>
        )}
      </div>
      <div className="overflow-x-auto w-full mt-10 flex justify-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
