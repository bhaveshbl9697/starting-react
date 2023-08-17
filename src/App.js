import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import React from "react";

import "./App.css";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";
import PokemonContex from "./PokemonContex";

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      // return state;
      throw new Error("No Error");
  }
};
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
  const [state, dispatch] = React.useReducer(PokemonReducer, {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  });

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContex.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <PokemonFilter />
          <PokemonTable />
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContex.Provider>
  );
}

export default App;
