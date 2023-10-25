// FormEditUser.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../action/userAction.jsx';
import "../styleComponents/FormEditUser.scss"; 

function FormEditUser() {
  const user = useSelector(state => state.user);
  const [userName, setUserName] = useState(user.userName);
  const [firstName] = useState(user.firstName);
  const [lastName] = useState(user.lastName);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // Ajout du state pour le message d'erreur
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUserProfile({ userName }, token));
      setSuccessMessage('User information updated successfully!');
      setErrorMessage(null); // Efface le message d'erreur en cas de succès
    } catch (error) {
      setSuccessMessage(null); // Efface le message de succès en cas d'erreur
      setErrorMessage('Erreur lors de la mise à jour des informations de l/utilisateur. Veuillez réessayer.'); // Défini le message d'erreur
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Edit user info</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              readOnly
            />
          </div>

          <div className="buttons">
            <button type="submit" className="save">
              Save
            </button>
            <button type="button" className="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditUser;
