export default function Fetching() {
  fetch("http://localhost:3003/furnitures")
    //   récupère l'url de l'API
    .then((response) => response.json())
    // demande d'envoyer la réponse dans un tableau json
    .then((data) => {
      console.log(data);
    //   log la donnée 
    })
    .catch((error) => {
      console.log("Erreur : " + error);
    //   affiche une erreur si elle existe
    });
}
