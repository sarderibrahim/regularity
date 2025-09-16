let personne = {
  nom: " ugo",
  prenom: "hugo",
  taille: "1.8",
  sexe: "homme",
  bonjour: function () {
    alert("Bonjour  " + personne.nom + " " + personne.prenom);
  },
};

console.log(personne.bonjour());
console.log(personne.bonjour);
