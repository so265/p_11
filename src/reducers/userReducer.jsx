// Gère l'état global de l'utilisateur

import { createSlice } from '@reduxjs/toolkit';

// Je crée un slice pour gérer les données de l'utilisateur
const userSlice = createSlice({
  name: 'user', // Mon slice s'appelle "user"
  initialState: {
    name: null,   // Je déclare mon attribut "name" avec une valeur initiale nulle
    email: null,  // J'initialise l'attribut "email" à null
    token: null,  // J'initialise également l'attribut "token" à null
    isAuthenticated: false, // Nouvelle propriété pour suivre l'état de connexion
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
    updateToken: (state, action) => {
      state.token = action.payload; // le payload est la donnée envoyé avec l'action pour que le réducteur puisse l'utiliser pour effectuer des modifications appropriées dans l'état global de l'application.
      state.isAuthenticated = !!action.payload; // Mise à jour de l'état de connexion
    },   
  },
});

export const { setUser, updateToken } = userSlice.actions;
export default userSlice.reducer;

