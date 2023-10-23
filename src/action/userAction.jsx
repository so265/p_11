// userAction.jsx

import { setUser, setAuthenticated } from '../reducers/userReducer.jsx';

// Fonction asynchrone pour récupérer le profil de l'utilisateur depuis l'API.
export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    // Effectue une requête HTTP pour récupérer les données du profil utilisateur.
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {  // Vérifie si la réponse HTTP est réussie (statut 200 OK).
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();  // Je récupère les données de réponse JSON de l'API.

    console.log('Data from API:', data); 
    if (data && data.status === 200 && data.body) { // Je érifie si les données de profil sont valides.
      const userData = {  // Création d'un objet userData contenant le nom complet et l'email de l'utilisateur.
        name: data.body.firstName + ' ' + data.body.lastName,
        userName: data.body.userName,
        email: data.body.email,
      };

      console.log('Data sent to setUser:', userData); 

      dispatch(setUser(userData)); // Mise à jour des données de l'utilisateur dans le store Redux en utilisant l'action setUser.
      dispatch(setAuthenticated(true)); // // Définit l'authentification comme réussie dans le store Redux en utilisant l'action setAuthenticated.

       // Retourne les données du profil utilisateur.
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
