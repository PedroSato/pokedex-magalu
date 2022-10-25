import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonInfo = useCallback(async () => {
    const result = await axios.get(url);
    setPokemons(result.data.sprites);
  }, [url]);

  useEffect(() => {
    fetchPokemonInfo();
  }, [fetchPokemonInfo]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexBasis: "10%",
      }}
    >
      <img
        style={{ alignSelf: "center", width: "100%" }}
        src={pokemons.front_default}
        alt={name}
      />
      <div style={{ textAlign: "center", fontSize: "30px" }}>{name}</div>
    </div>
  );
};

export default PokemonCard;
