// Je crée une action pour mettre à jour le token d'authentification
import { createSlice } from '@reduxjs/toolkit';

const authentificationSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    updateToken: (state, action) => {
      // L'action updateToken me permet de mettre à jour le token d'authentification
      state.token = action.payload;
    },
  },
});

export const { updateToken } = authentificationSlice.actions;
export default authentificationSlice.reducer;
