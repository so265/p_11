// Gère les informations de l'utilisateur, garanti la cohérence des données utilisateur dans toute l'application

// userReducer.jsx

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName; // state représente l'état actuel du slice user avant que l'action ne soit appliquée
      state.lastName = action.payload.lastName; // payload contient les données que je veux utiliser pour mettre à jour l'état.
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload; // valeur true ou false
    },
  },
});

export const { setUser, setAuthenticated } = userSlice.actions;
export default userSlice.reducer; // j'exporte le reducer pour l'importer ds le store

