import { createSlice } from '@reduxjs/toolkit';

// Je crée un slice pour gérer les données de l'utilisateur
const userSlice = createSlice({
  name: 'user', // Mon slice s'appelle "user"
  initialState: {
    name: null,   // Je déclare mon attribut "name" avec une valeur initiale nulle
    email: null,  // J'initialise l'attribut "email" à null
    token: null,  // J'initialise également l'attribut "token" à null
    // J'ajoute d'autres attributs d'utilisateur ici avec des valeurs initiales nulles
  },
  reducers: {
    setUser: (state, action) => {
      // J'utilise cette action pour mettre à jour les données de l'utilisateur
      state.name = action.payload.name;
      state.email = action.payload.email;
      // Je mets à jour d'autres attributs de l'utilisateur au besoin
    },
    updateToken: (state, action) => {
      state.token = action.payload; 
    },   
  },
});

export const { setUser, updateToken } = userSlice.actions;
export default userSlice.reducer;

