import React from "react";
import useStore from "../store";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const pokemonList = useStore((state) => state.pokemon);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);
  const filter = useStore((state) => state.filters); // Change this to state.filters

  return (
    <table width="100%">
      <tbody>
        {pokemonList
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemonItem) => (
            <PokemonRow
              key={pokemonItem.id}
              pokemon={pokemonItem}
              onClick={() => setSelectedPokemon(pokemonItem)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
