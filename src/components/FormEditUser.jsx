// FormEditUser.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../action/userAction.jsx';

function FormEditUser() {
  const user = useSelector(state => state.user);
  const [userName, setUserName] = useState(user.userName);
  const [firstName] = useState(user.firstName);
  const [lastName] = useState(user.lastName);
  const dispatch = useDispatch();

  // Récupérer le token depuis le Redux Store
  const token = useSelector(state => state.token);

  // Utilisez useEffect pour afficher le token lorsque le composant est monté
  useEffect(() => {
    console.log('Token from Redux Store:', token);
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Utilisez le token dans la soumission du formulaire
    dispatch(updateUserProfile({ userName }, token));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Edit user info</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
