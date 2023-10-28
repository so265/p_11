// authentificationReducer.jsx, s'occupe uniquement de la gestion des tokens.

import { createSlice } from '@reduxjs/toolkit';

const authentificationSlice = createSlice({
  name: 'auth', // Mon slice s'appelle "auth"
  initialState: {
    token: null, // J'initialise l'attribut "token" à null
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload; // Ici le token est stocké
    },
    logout: (state) => {
      state.token = null;  // le token est supprimé ici lors de la deconnexion
    },
  },
});

export const { updateToken, logout } = authentificationSlice.actions;
export default authentificationSlice.reducer;
