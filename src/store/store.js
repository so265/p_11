// store.js

import { configureStore } from '@reduxjs/toolkit';
import authentificationReducer from '../reducers/authentificationReducer';
import userReducer from '../reducers/userReducer.jsx';


const store = configureStore({
  reducer: {
    auth: authentificationReducer,
    user: userReducer,
  },
});

export default store;
