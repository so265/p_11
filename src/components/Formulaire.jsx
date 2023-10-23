// Formulaire.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateToken } from '../reducers/authentificationReducer.jsx';
import { setAuthenticated, setUser } from '../reducers/userReducer.jsx'; // Import de l'action setUser
import { loginToAPI } from '../api/authApi'; 
import { fetchUserProfile } from '../action/userAction';

import '../styleComponents/Formulaire.scss';
import { useNavigate } from 'react-router-dom'; 

function Formulaire() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  // Ajout d'un état pour gérer le message d'erreur
  const [errorMessage, setErrorMessage] = useState(null);

  // Fonction pour gérer la soumission du formulaire de connexion.
  const handleSignIn = async () => {
    try {
      const response = await loginToAPI(formData);

      // Vérifie la réponse de l'API.
      if (response.status === 200 && response.body) {
        const { token } = response.body;
        console.log('Token from API:', token);

        // Mise à jour du token dans le store Redux.
        dispatch(updateToken(token));

        // Récupère les données de profil de l'utilisateur depuis l'API
        const userProfileData = await dispatch(fetchUserProfile(token));

        console.log('User profile data:', userProfileData);

        // Vérifie si les données de profil sont valides
        if (userProfileData && userProfileData.body) {
          const { firstName, lastName, email } = userProfileData.body;
          const userName = `${firstName} ${lastName}`;  // Création du nom complet de l'utilisateur.
          
          dispatch(setUser({ name: userName, email })); // Mise à jour des données de l'utilisateur dans le store Redux.
        }

        dispatch(setAuthenticated(true));  // Définit l'authentification comme réussie dans le store Redux.
        navigate('/user'); // Redirige l'utilisateur vers la page "/user".
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setErrorMessage("Le nom d'utilisateur ou le mot de passe est incorrect.");
    }
  }

  return (
    <main className="main-bg-dark">
      <section className="sign-in-content main">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        {/* Affiche le message d'erreur si présent */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              autoComplete="new-password"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              autoComplete="current-password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="button" onClick={handleSignIn} className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Formulaire;
