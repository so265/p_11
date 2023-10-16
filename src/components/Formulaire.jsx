import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateToken } from '../reducers/userReducer.jsx'; // voir s il faut utiliser setUser
import { loginToAPI } from '../api/authApi'; // j'importe la fonction loginToAPI
import '../styleComponents/Formulaire.scss';
import { useNavigate } from 'react-router-dom'; // j'importe useNavigate

function Formulaire() {
  // Je gère l'état local du formulaire
  const [formData, setFormData] = useState({ email: '', password: '' });

  // J'obtiens une référence au dispatch Redux
  const dispatch = useDispatch();
  const navigate = useNavigate(); // pour obtenir la fonction de navigation

  // J'écris une fonction pour gérer la soumission du formulaire (connexion)
  const handleSignIn = async () => {
    try {
      // J'effectue la requête d'authentification vers mon API en utilisant les données du formulaire (formData)
      const response = await loginToAPI(formData);

      // Vérifie que la réponse de l'API a un statut de 200 (OK) et que la propriété 'body' existe
      if (response.status === 200 && response.body) {
       
      // J'extrait le token de la réponse
        const { token } = response.body;

        // J'affiche le token dans la console
        console.log('Réponse de l\'API (token) :', token);

        // J'appelle la fonction updateToken pour mettre à jour le token dans Redux
        dispatch(updateToken(token));

        // Redirection vers la page utilisateur après une connexion réussie
        navigate('/user');
      } else {
        // Je gère les erreurs, par exemple, j'affiche un message d'erreur
        console.error('Réponse de l\'API invalide ou utilisateur non défini.');
      }
    } catch (error) {
      // Je gère les erreurs, par exemple, j'affiche un message d'erreur
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <main className="main-bg-dark">
      <section className="sign-in-content main">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              autoComplete="new-password" // Ceci pour spécifier l'autocomplétion pour le mot de passe
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
