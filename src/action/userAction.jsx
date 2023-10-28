// userAction.jsx
// Contient deux fonctions asynchrones qui sont des actions Redux qui interagissent avec l'API pour gérer le profil de l'utilisateur

import { setUser, setAuthenticated } from '../reducers/userReducer.jsx';

const API_ENDPOINT = 'http://localhost:3001/api/v1/user/profile';

// Fonction asynchrone pour récupérer le profil de l'utilisateur depuis l'API., pour le 1er formulaire
export const fetchUserProfile = (token) => async (dispatch) => {
  try {
   if (!token) {
      const errorMsg = 'Token absent lors de la récupération du profil.';
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `HTTP error! Status: ${response.status}`);
    }

    if (data.status === 200 && data.body) {
      const userData = {
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName: data.body.userName,
        email: data.body.email,
      };

      dispatch(setUser(userData));
      dispatch(setAuthenticated(true));

      return data.body;
    }

  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

// Ajout de la nouvelle fonction updateUserProfile, c est pour modifier le pseudo
export const updateUserProfile = (userData, token) => async (dispatch) => {
  try {
    if (!token) {
      const errorMsg = 'Token absent lors de la mise à jour du profil.';
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const response = await fetch(API_ENDPOINT, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `HTTP error! Status: ${response.status}`);
    }

    if (data.status === 200 && data.body) {
      dispatch(setUser(data.body));
      return data.body;
    }

  } catch (error) {
    console.error('Error updating user profile:', error);
    return null;
  }
};
