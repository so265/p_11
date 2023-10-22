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
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };

  try {
      // Envoi de la requête POST à l'API
      const response = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify(requestData),
          headers: headers,
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      // Conversion de la réponse en JSON
      const responseData = await response.json();

      // Affichage de la réponse de l'API dans la console pour le débogage
      console.log('Réponse de l\'API :', responseData);

      // Retour de la réponse de l'API
      return responseData;

  } catch (error) {
      // En cas d'erreur, propager l'erreur pour une gestion ultérieure
      console.error('There was a problem with the fetch operation:', error.message);
      throw error;
  }
}
