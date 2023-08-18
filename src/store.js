import { create } from "zustand";

const useStore = create((set) => ({
  pokemon: [],
  filters: "",
  selectedPokemon: null,
  setPokemon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
  setFilters: (filters) =>
    set((state) => ({
      ...state,
      filters,
    })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({
      ...state,
      selectedPokemon,
    })),
}));

fetch("/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) =>
    useStore.setState((state) => ({
      ...state,
      pokemon,
    }))
  );

export default useStore;
