import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: [],
};

const dexSlice = createSlice({
  name: "dex",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.selectedPokemon = [...state.selectedPokemon, action.payload];
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter((pokemonId) => pokemonId !== Number(action.payload));
    },
  },
});

export const { addPokemon, removePokemon } = dexSlice.actions;
export default dexSlice.reducer;
