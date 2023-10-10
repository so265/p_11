import { configureStore } from '@reduxjs/toolkit';
import authentificationReducer from '../reducers/authentificationReducer.jsx';
import userReducer from '../reducers/userReducer.jsx';

const store = configureStore({
  reducer: {
    auth: authentificationReducer, // toutes les données gérées par le réducteur authentificationReducer seront stockées sous la clé "auth" dans le magasin Redux. Accés à ces données en utilisant state.auth dans mes composants React.
    user: userReducer, // toutes les données gérées par le réducteur userReducer seront stockées sous la clé "user" dans le magasin Redux. Accés à ces données en utilisant state.user dans mes composants React.
    
  },
  
});

export default store;