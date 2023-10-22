// Gère les informations de l'utilisateur, garanti la cohérence des données utilisateur dans toute l'application

// userReducer.jsx

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    email: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setAuthenticated } = userSlice.actions;
export default userSlice.reducer;

