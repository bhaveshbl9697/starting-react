import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import React from "react";

import "./App.css";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";
import PokemonContex from "./PokemonContex";

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState(null);
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContex.Provider
      value={{
        filter,
        pokemon,
        selectedPokemon,
        filterSet,
        pokemonSet,
        selectedPokemonSet,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />

            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContex.Provider>
  );
}

export default App;
