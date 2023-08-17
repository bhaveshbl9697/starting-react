import styled from "@emotion/styled";
import React from "react";
import PokemonContex from "../PokemonContex";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = React.useContext(PokemonContex); // Corrected context name

  const handleFilterChange = (evt) => {
    const newFilterValue = evt.target.value;
    dispatch({
      type: "SET_FILTER", // Corrected action type
      payload: newFilterValue, // Use payload to pass the new filter value
    });
  };

  return (
    <Input
      type="text"
      value={filter}
      onChange={handleFilterChange} // Use the defined function here
    />
  );
};

export default PokemonFilter;
