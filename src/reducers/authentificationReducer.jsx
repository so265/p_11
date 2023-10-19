// authentificationReducer.jsx, s'occupe uniquement de la gestion des tokens.

import { createSlice } from '@reduxjs/toolkit';

const authentificationSlice = createSlice({
  name: 'auth', // Mon slice s'appelle "auth"
  initialState: {
    token: null, // J'initialise l'attribut "token" à null
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { updateToken, logout } = authentificationSlice.actions;
export default authentificationSlice.reducer;
