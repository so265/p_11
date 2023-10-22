// store.js

import { configureStore } from '@reduxjs/toolkit';
import authentificationReducer from '../reducers/authentificationReducer';
import userReducer from '../reducers/userReducer.jsx';

// Je configure mes reducers en spécifiant leur nom et le reducer correspondant.
const store = configureStore({
  reducer: {
    auth: authentificationReducer, // Mon reducer d'authentification.
    user: userReducer, // Mon reducer d'utilisateur.
  },
});

export default store;
