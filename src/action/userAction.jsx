// userActions.jsx

// userAction.jsx

import { setUser, setAuthenticated } from '../reducers/userReducer.jsx';

export const fetchUserProfile = (token) => async (dispatch) => {
  console.log('Token used:', token); // Pour vérifier le token utilisé
  
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data); // Pour voir la réponse de l'API

    if (data && data.status === 200 && data.body) {
      dispatch(setUser({
        id: data.body.id,
        name: data.body.firstName + ' ' + data.body.lastName, // Assuming you want the full name here
        email: data.body.email,
        // and other properties you might want to save
      }));
      dispatch(setAuthenticated(true));
      return data.body;
    } else {
      console.error('Error fetching user profile:', data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};
