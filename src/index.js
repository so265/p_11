import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // J'importe le Provider de React Redux
import './index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.jsx';
import store from './store/store.js'; // J'importe mon magasin Redux ici

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <Provider store={store}> {/* J'enveloppe mon App avec le Provider pour passer le store à tous mes composants */}
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
