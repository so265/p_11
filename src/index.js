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
   <Provider store={store}> {/* J'enveloppe mon App avec le Provider */}
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
