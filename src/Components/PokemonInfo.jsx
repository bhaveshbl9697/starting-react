import React, { useContext } from "react";

import PokemonType from "../PokemonType";
import PokemonContex from "../PokemonContex";

const PokemonInfo = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokemonContex);
  return selectedPokemon ? (
    <div>
      <h2>{selectedPokemon.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};
PokemonInfo.propTypes = PokemonType;
export default PokemonInfo;
