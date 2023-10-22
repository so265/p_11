// userActions.jsx

// userAction.jsx

import { setUser, setAuthenticated } from '../reducers/userReducer.jsx';

export const fetchUserProfile = (token) => async (dispatch) => {
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

    console.log('Data from API:', data); // Ajoutez cette ligne

    if (data && data.status === 200 && data.body) {
      const userData = {
        name: data.body.firstName + ' ' + data.body.lastName,
        email: data.body.email,
      };

      console.log('Data sent to setUser:', userData); // Ajoutez cette ligne

      dispatch(setUser(userData));
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
