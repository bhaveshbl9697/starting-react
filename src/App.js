//important steps to put on github
// git add .
// git commit -m "zustand commit"
// git branch -M main
// git remote add origin https://github.com/bhaveshbl9697/starting-react.git
// git push -u origin main
// npm run predeploy
// npm run deploy

import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import React from "react";
import "./App.css";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonTable from "./Components/PokemonTable";
// importing statements
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
  return (
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
  );
}

export default App;
