import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    status: "initial",
    path: "",
    details: {},
    films: [],
    vehicles: [],
    starships: [],
    characters: [],
    plantes: [],
    species: [],
    homeworld: "",
  },
  reducers: {
    getDetails: (state) => {
      state.status = "loading";
    },
    getDetailsSuccess: (state, { payload: details }) => {
      state.details = details;
      state.status = "success";
    },
    getDetailsError: () => ({
      status: "error",
    }),
    getShipsName: (state, { payload: starships }) => {
      state.starships = starships;
    },
    getVehiclesName: (state, { payload: vehicles }) => {
      state.vehicles = vehicles;
    },
    getFilmsTitle: (state, { payload: films }) => {
      state.films = films;
    },
    getCharactersName: (state, { payload: characters }) => {
      state.characters = characters;
    },
    getPlanetsName: (state, { payload: planets }) => {
      state.planets = planets;
    },
    getSpeciesName: (state, { payload: species }) => {
      state.species = species;
    },
    getHomeworld: (state, { payload: homeworld }) => {
      state.homeworld = homeworld;
    },
    clearState: (state) => {
      state.path = "";
      state.details = {};
      state.films = [];
      state.vehicles = [];
      state.starships = [];
      state.characters = [];
      state.plantes = [];
      state.species = [];
      state.homeworld = "";
    },
  },
});

export const {
  getDetails,
  getDetailsSuccess,
  getDetailsError,
  getShipsName,
  getVehiclesName,
  getFilmsTitle,
  getCharactersName,
  getPlanetsName,
  getSpeciesName,
  getHomeworld,
  clearState,
} = detailsSlice.actions;

export const selectDetailsState = (state) => state.details;
export const selectDetailsResults = (state) =>
  selectDetailsState(state).details;
export const selectDetailsStatus = (state) => selectDetailsState(state).status;

export default detailsSlice.reducer;
