// FormEditUser.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../action/userAction.jsx';
import "../styleComponents/FormEditUser.scss"; 

function FormEditUser({ toggleEditForm }) { // je recupere ce props toggleEditForm du composant welcomeBack pour cacher le form si clic save ou cancel
  const user = useSelector(state => state.user); // L'état initial de user est utilisé pour pré-remplir le formulaire d'édition des informations de l'utilisateur et pour afficher les détails de l'utilisateur
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
      // Tentative de mise à jour du profil utilisateur avec le nouveau pseudo (userName)
      const updatedUser = await dispatch(updateUserProfile({ userName }, token));
      if (updatedUser) {
        // Affichage du message de succès
        setSuccessMessage("Profil mis à jour !");
        // Réinitialisation du message d'erreur
        setErrorMessage(null);
        // Délai avant de fermer le formulaire pour permettre à l'utilisateur de lire le message de succès
        setTimeout(() => {
          toggleEditForm(); // Appel de la fonction pour fermer le formulaire après un délai
        }, 3000); // Délai de 3 secondes avant la fermeture automatique du formulaire
      }
    } catch (error) {
      // En cas d'échec de la mise à jour, le message de succès est effacé et un message d'erreur est affiché
      setSuccessMessage(null);
      setErrorMessage("Erreur lors de la mise à jour des informations de l'utilisateur. Veuillez réessayer.");
    }
  };
  
 const handleCancel = () => {
    setUserName(user.userName);
    setSuccessMessage(null);
    setErrorMessage(null);
    toggleEditForm(); // Je cache le formulaire apres une annulation reussie au click sur cancel,appel changela valeur de showEditForm dans le composant parent WelcomeBack, affiche le message "Welcome back".
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
            <button type="submit" className="save"> {/*submit bouton pour soumettre le formulaire*/}
              Save
            </button>
            <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
           </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditUser;
