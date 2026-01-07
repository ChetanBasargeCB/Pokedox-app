import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCards";
import { SearchFild } from "./search";
import "../../App.css"

export function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [Search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data);
      setLoading(false);

      // looping the API inside the API
      const detailsPokemon = data.results.map(async (curPokemon) => {
        // console.log(curPokemon.url)
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        // console.log(data)

        return data;
      });
      // console.log(detailsPokemon);

      const detailsRes = await Promise.all(detailsPokemon); //--- .all() works when all promieses are fullfiled(completed) if any one is pending it not work
      console.log(detailsRes);
      setPokemon(detailsRes);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality
  const pokmonSearch = pokemon.filter((currPoko) => {
    return currPoko.name.toLowerCase().includes(Search.toLowerCase());
  });
  // console.log(pokmonSearch);
  if (loading) {
    return (
      <div className=" flex  justify-center text-2xl font-bold text-black">
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className=" flex justify-center text-2xl font-bold text-red-400">
        <h1>Error:{error.message}</h1>
      </div>
    );
  }
  return (
    <div className=" min-h-screen bg-blue-100 transition duration-300 ease-in-out">
      <SearchFild value={Search} setSearch={setSearch} />
      <div>
        <ul className="grid  max-sm:grid-cols-2 max-xl:grid-cols-2 grid-cols-4 ">
          {/* {pokemon.map((curpoko) => {
            return <PokemonCard key={curpoko.id} pokemondata={curpoko} />
          })} */}
          {pokmonSearch.map((curpoko) => {
            return <PokemonCard key={curpoko.id} pokemondata={curpoko} />;
          })}
        </ul>
      </div>
    </div>
  );
}
