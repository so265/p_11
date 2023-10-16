// Permet à l'utilsateur de seconnecter au site
import axios from 'axios';  //  bibliothèque Axios, utilisée pour effectuer des requêtes HTTP, des requêtes vers des API.

// Fonction pour effectuer la requête d'authentification
export async function loginToAPI(formData) {
  // Définition de l'URL de l'API
  const apiUrl = 'http://localhost:3001/api/v1/user/login'; // C'est l'URL vers laquelle le code envoie la requête POST pour l'authentification.

  // Création des données de la requête
  const requestData = {
    email: formData.email,
    password: formData.password,
  };

  // Définition des en-têtes de la requête, configurés pour indiquer au serveur qu'une réponse au format JSON est attendue et que les données envoyées sont également au format JSON.
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    // Envoi de la requête POST à l'API
    const response = await axios.post(apiUrl, requestData, { headers });

    // Affichage de la réponse de l'API dans la console pour le débogage
    console.log('Réponse de l\'API :', response.data);

    // Retour de la réponse de l'API
    return response.data;
  } catch (error) {
    // En cas d'erreur, propager l'erreur pour une gestion ultérieure
    throw error;
  }
}
