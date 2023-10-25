import React, { useState } from 'react';
import "../styleComponents/WelcomeBack.scss"; 
import { useSelector } from 'react-redux';
import FormEditUser from './FormEditUser'; 
function WelcomeBack() {
  // J'utilise useSelector pour obtenir les informations de l'utilisateur à partir du store Redux
  const user = useSelector(state => state.user);
  
  // Je définis un état local pour savoir si le formulaire d'édition doit être affiché ou non
  const [showEditForm, setShowEditForm] = useState(false);

  // Je crée une fonction pour afficher ou cacher le formulaire d'édition
  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <div>
     <main className="main bg-dark">
     {!showEditForm && (
          <div className="header">
            <h1 className='title'>Welcome back<br />{`${user.firstName} ${user.lastName}`}!</h1>
            {/* Je lie la fonction toggleEditForm au bouton "Edit Name" pour afficher ou cacher le formulaire */}
            <button className="edit-button" onClick={toggleEditForm}>
              Edit Name
            </button>
          </div>
          )}
          {/* Si showEditForm est vrai, j'affiche le formulaire FormEditUser */}
          {showEditForm && <FormEditUser />} 

          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
        </div>
      )
}

export default WelcomeBack;
