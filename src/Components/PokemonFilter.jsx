import styled from "@emotion/styled";
import React from "react";
import useStore from "../store";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
  const setFilters = useStore((state) => state.setFilters); // Use setFilters here
  const filter = useStore((state) => state.filters); // Use state.filters here

  const handleFilterChange = (evt) => {
    setFilters(evt.target.value); // Use setFilters to update the filter state
  };

  return <Input type="text" value={filter} onChange={handleFilterChange} />;
};

export default PokemonFilter;
