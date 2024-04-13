import { useEffect, useMemo, useState } from "react";
import PokeMonCard from "./PokeMonCard";
import NavBar from "./NavBar";
import "./PokemonList.css"; // Import the CSS file containing fadeIn animation styles

const PokemonList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearch = (value) => {
    if (value.trim() === "") {
      setSearchQuery(null); // Set searchQuery to null if value is empty or contains only spaces
    } else {
      setSearchQuery(value.trim()); // Set searchQuery to trimmed value otherwise
    }
  };

  // Fetch data for searched pokemon
  const fetchSearchData = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchQuery}`
      );
      const data = await response.json();
      return [data]; // Return search result as an array
    } catch (error) {
      console.error("Error Fetching Search Result:", error);
      return []; // Return empty array if error occurs
    }
  };

  // Fetch pokemon data based on page
  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 10}&limit=9`
      );
      const data = await response.json();
      const results = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return pokemonData;
        })
      );
      return results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return empty array if error occurs
    }
  };

  useEffect(() => {
    // Fetch searched data
    const fetchSearch = async () => {
      const data = await fetchSearchData(searchQuery);
      setSearchedData(data);
    };
    fetchSearch();
  }, [searchQuery]);

  useEffect(() => {
    // Fetch pokemon data based on page
    const fetchPokemonData = async () => {
      const data = await fetchData(currentPage);
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [currentPage]);

  const pokeList = searchedData.length > 0 ? searchedData : pokemonData;

  const memoizedPokemonCards = useMemo(
    () =>
      pokeList.map((pokemon, index) => (
        <PokeMonCard key={index} pokemon={pokemon} className="fadeIn" />
      )),
    [pokeList]
  );

  useEffect(() => {
    // Trigger the fade-in animation after a short delay to allow rendering
    const timeout = setTimeout(() => {
      const cards = document.querySelectorAll(".fadeIn");
      cards.forEach((card) => card.classList.add("show"));
    }, 100);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [memoizedPokemonCards]);

  return (
    <div className="p-8 flex flex-col md:mr-20 md:ml-20 items-center justify-center">
      <div>
        <NavBar handleSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center w-full">
        {memoizedPokemonCards}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            setCurrentPage((prevPage) =>
              prevPage > 1 ? prevPage - 1 : prevPage
            )
          }
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
