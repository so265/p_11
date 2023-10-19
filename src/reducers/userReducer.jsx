// Gère les informations de l'utilisateur, garanti la cohérence des données utilisateur dans toute l'application

import { createSlice } from '@reduxjs/toolkit';

// Je crée un slice pour gérer les données de l'utilisateur
const userSlice = createSlice({
  name: 'user', // Mon slice s'appelle "user"
  initialState: {
    name: null,   // Je déclare mon attribut "name" avec une valeur initiale nulle
    email: null,  // J'initialise l'attribut "email" à null
    isAuthenticated: false, // propriété pour suivre l'état de connexion
  },
  reducers: {
    setUser: (state, action) => {
      // J'utilise cette action pour mettre à jour les données de l'utilisateur
      state.name = action.payload.name;
      state.email = action.payload.email;
      // Je mets à jour d'autres attributs de l'utilisateur au besoin
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    },
});

export const { setUser, setAuthenticated } = userSlice.actions;
export default userSlice.reducer;

