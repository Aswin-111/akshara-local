"use client"

import React from 'react'


import { useRef } from 'react'
function CollectData() {
    const countryRef = useRef("")
    const stateRef = useRef("")
    const langRef = useRef("")
    const coordsRef = useRef("")
  return (
   <div >
     <div className='mt-10'>
        <input type = "text" className='border-2 mx-5 rounded-lg p-3' ref = {countryRef} placeholder = "Country"/>
        <input type = "text" className='border-2 mx-5 rounded-lg p-3' ref = {stateRef} placeholder = "State"/>
        <input type = "text" className='border-2 mx-5 rounded-lg p-3' ref = {langRef} placeholder = "Language"/>
        <input type = "text" className='border-2 mx-5 rounded-lg p-3' ref = {coordsRef} placeholder = "Coords"/>
     </div>
   </div>
  )
}

export default CollectData