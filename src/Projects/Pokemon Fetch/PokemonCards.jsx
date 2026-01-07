 import { pokeTypeBg } from "./poketypeData"

 const pokemonType ={
  "grass":"bg-green-300",
   "fire":"bg-red-300",
   "water":"bg-blue-300"
 }
 

export const PokemonCard = ({pokemondata})=>{
  const PokeBgChnager = pokeTypeBg[pokemondata.types[0].type.name] || "bg-gray-300"
  const pokeTypeColor = pokemonType[pokemondata.types[0].type.name] || "bg-gray-200"
  
 return(
   <div className="bg-blue-100 mt-10 flex justify-center items-center">
      <div className="bg-white w-40  sm:w-80 sm:h-fit flex-col justify-items-center group"> 
        <div className={`mt-5 group-hover:${PokeBgChnager} z-0 `}>
          <img src={pokemondata.sprites.other.dream_world.front_default} alt="pokemon"  className=" w-20 sm:w-40 sm:h-40 group-hover:scale-110 z-10"  />
        </div>
        <div className={` text-xs sm:mt-5 text-gray-700 font-sans sm:text-2xl p-2 rounded-2xl font-bold` }>
          <h1> {pokemondata.name.toUpperCase()} </h1>
        </div>
        <div className={`${pokeTypeColor} p-1 rounded-xs sm:p-3 text-gray-900 font-bold`}>
          <h1>{pokemondata.types[0].type.name}</h1>
        </div>
        <div className=" max-sm:text-xs space-x-4 mt-1 grid grid-cols-2 sm:space-x-10 sm:mt-4
        
        ">
         <div className="  flex flex-col justify-center items-center font-bold"> <div className="font-light">21</div> Height</div>
         <div className="  flex flex-col justify-center items-center font-bold"> <div className="font-light" >21</div> Weight</div>
        </div>
         <div className=" max-sm:text-xs max-sm:mt-2  space-x-4 grid grid-cols-2 sm:space-x-10 mt-5 mb-2">
         <div className="flex flex-col justify-center items-center font-bold"> <div className="font-light">{pokemondata.types[0].type.name} </div> Speed</div>
         <div className="flex flex-col justify-center items-center font-bold"> <div className="font-light">{pokemondata.moves[0].move.name}</div> Ability </div>
        </div>
        
      </div>
    </div>
 )
}