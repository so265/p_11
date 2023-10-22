// Formulaire.jsx

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

  const handleSignIn = async () => {
    try {
      const response = await loginToAPI(formData);

      if (response.status === 200 && response.body) {
        const { token } = response.body;
        console.log('Token from API:', token);

        dispatch(updateToken(token));

        // Fetch user profile data
        const userProfileData = await dispatch(fetchUserProfile(token));

        console.log('User profile data:', userProfileData);

        if (userProfileData && userProfileData.body) {
          const { firstName, lastName, email } = userProfileData.body;
          const userName = `${firstName} ${lastName}`;
          
          dispatch(setUser({ name: userName, email }));
        }

        dispatch(setAuthenticated(true));
        navigate('/user');
      } else {
        console.error('Invalid API response or undefined user.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  }

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
