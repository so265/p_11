// authentificationReducer.jsx



import { createSlice } from '@reduxjs/toolkit';

const authentificationSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
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
