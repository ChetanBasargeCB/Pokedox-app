import { useEffect, useState } from "react"

export const Card = ()=>{
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu"
  const [pokemon,setPokemon]=useState("")

  const fetchApi = async ()=>{
    try {
      const res = await fetch(API)
      const data = await res.json()
      setPokemon(data)
      console.log(data)
      

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchApi()
  }
  ,[])

  
  return(
    <div className="bg-blue-100 min-h-screen flex justify-center items-center shadow ">
      <div className="bg-white w-70 h-90 flex-col justify-items-center m-20"> 
        <div className="mt-10">
          <img src="" alt="pokemon" />
        </div>
        <div className="mt-20">
          <h1> Name </h1>
        </div>
        <div className="mt-10">
          <h1>Type</h1>
        </div>
        
      </div>
    </div>
  )
    
} 