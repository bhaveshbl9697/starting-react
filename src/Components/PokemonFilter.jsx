import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

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
