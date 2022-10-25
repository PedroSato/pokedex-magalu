import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { createGlobalStyle } from "styled-components";
const App = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0px;
      
    }`;
  const [pokemonInfos, setPokemonInfos] = useState([]);

  const fetchPokemon = async () => {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    console.log(result);
    setPokemonInfos(result.data.results);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexGrow: "1",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      <GlobalStyle />
      {pokemonInfos.map((pokemonInfo) => {
        return (
          <>
            <PokemonCard url={pokemonInfo.url} name={pokemonInfo.name} />
          </>
        );
      })}
    </div>
  );
};

export default App;
