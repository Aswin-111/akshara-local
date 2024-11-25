"use client";
import { useEffect, useRef, useState } from "react";
import countries from "../../utils/countries.json";
import axios from "axios";
import Select from 'react-select'
function Admin() {
  const [selected, setSelected] = useState([])
  const selectRef = useRef("");
  const stateRef = useRef("");
  const itemRef = useRef("");
  const coordRef = useRef("");
  const [country, setCountry] = useState([]);
  const [countrydetails, setDetails] = useState([]);
  const [countrywithcoords, setCountryWithCoords] = useState([]);
  const [add, setAdd] = useState(false);
  const [countryselect, setCountrySelect] = useState(false);
  const [states, setStates] = useState([]);
  const [item, setItem] = useState([]);
  const [successtogg, setSuccess] = useState(false)


  const [statetoggle, setStatetoggle] = useState(false)
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '16vw',
      color: 'black', // This might not affect text color directly
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black', // Set the text color here
    }),
  };



  useEffect(() => {


    // const options = countries.map(i=>{


    //   console.log(i);
    //   return ([
    //   { value: i[0].toLowerCase()+i.slice(1,i.length), label: i },

    // ]

    // )


    // }
    // )

    const options = countries.map(i => {
      return { value: i, label: i }

    })
    setDetails([...options])

  }, [])
  return (
    <div className="  flex overflow-hidden">




      <div className="w-[16vw] h-[100vh] shadow-xl shadow-black flex flex-col items-center">








        <div className="mt-10 text-[1.3rem]">
          Selected  Languages
        </div>

        <div className="mt-10 flex flex-col items-center">
          {selected.map((i, index) => {
            return (

              <h1 key={index} className="mt-3">{i}</h1>
            )
          })
          }

        </div>
      </div>
      <div className="flex justify-around w-[76vw] h-full relative py-10">
        {/* <select 
          className="select select-bordered w-full max-w-xs "
          ref={selectRef}
          onChange={() => {
            console.log(selectRef.current.value);

            (async () => {
              try {
                const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/list-states`,
                  {
                    country: selectRef.current.value,
                  }
                );
                console.log(response.data);
                setStates(response.data.states);
                setItem(response.data.languages);
              } catch (err) {
              

                
                console.log(err)
                // setStates(response.data.states);
              }
            })();
          }}
        >
          {countries.map((i, index) => (
            <option value={i === "Select a country" ? null : i} key={index}>
              {i}
            </option>
          ))}
        </select> */}

{/* added new redesign */}

        <Select
          options={countrydetails}
          className="w-[16vw] "

          onChange={(e) => {

            (async () => {
              try {







                console.log(e.value);


                if (e.value.toLowerCase() === "india") {
                  const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/list-states`,
                    {
                      country: e.value
                    }
                  );
                  setStatetoggle(true)
                  console.log(response.data);
                  setStates(response.data.states);
                  setItem(response.data.languages);
                }
                else {
                  console.log(e.value ,"done")
                  if (e.value.toLowerCase() != "Select a country") {
                    const response = await axios.post(
                      `${process.env.NEXT_PUBLIC_BASE_URL}/list-states`,
                      {
                        country: e.value
                      }
                    );
                    setStatetoggle(false)
                    console.log(response.data);
                    setStates(response.data.states);
                    setItem(response.data.languages);
                  }
                }

              } catch (err) {



                console.log(err)
                // setStates(response.data.states);
              }
            })();
          }}
        />
        {statetoggle && <select
          className="select select-bordered w-full max-w-xs"
          disabled={states.length === 0}
          ref={stateRef}
        >
          <option>Select a state</option>
          {states.map((i, index) => (
            <option value={i} key={index}>
              {i}
            </option>
          ))}
        </select>
        }
       {item.length !== 0 &&
        <select
          ref={itemRef}
          className="select select-bordered w-full max-w-xs"
          










          onChange={(e) => {
            setSelected([...selected, e.target.value])
          }}
        >
          <option>Select item</option>
          {item.map((i, index) => (
            <option value={i} key={index}>
              {i}
            </option>
          ))}


        </select>

        



        }






        <textarea disabled={states.length === 0} ref={coordRef} className="border-2 border-black w-[30vw] h-[30vh] absolute top-[30vh]"></textarea>





        <button className="absolute left-[30vw] top-[90vh] py-5 px-10 bg-green-400 rounded-xl text-white" onClick={() => {






          (async () => {



            try {
              const country = selectRef.current.value
              const state = stateRef.current.value
              const language = [...selected]







              const coordinates = JSON.parse(coordRef.current.value)
              console.log(coordinates);
              const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/single-polygon`, { coordinates, state, language, country, strokeColor: "#FF0000", fillColor: "#FF0000" })


              console.log(response)

              if (response.data) {
                setSuccess(true)
              }






















            }
            catch (err) {
              console.log(err);


            }










          })()
        }}>
          Upload coords
        </button>


        {successtogg && <div role="alert" className="alert shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold">Success</h3>
            <div className="text-xs">Uploaded</div>
          </div>
          <button className="btn btn-sm">See</button>
        </div>}
      </div>
    </div>
  );
}

export default Admin;