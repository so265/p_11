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
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token); // Récupére le token depuis le store Redux

  const handleSubmit = (e) => {
    e.preventDefault();
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
