// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

let prenom = `Denis`;
let nom = `Henin`;
let age = `29`;
let taille = `170cm`;
console.log(age)


// let denis = {
//   nom : "Henin",
//   prenom : "Denis",
//   age : 29,
//   taille : "170cm",
//   presenter(){
//     console.log(`voici mon age, ${denis.age} ans`);
//   },
// }
// denis.presenter()


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let prenom1 = `Alain`;
let nom1 = `Bior`;
let age1 = `24`;
let taille1 = `175cm`;
console.log(age1)

let prenomV = ``;
let nomV = ``;
let ageV = ``;
let tailleV = ``;
console.log(ageV)

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur 

let prenom3 = `Alain`;
let nom3 = `Henin`;
let age3 = `24`;
let taille3 = `178`;
console.log(age3)

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.


let pers3 = {
  nom : "Henin",
  prenom : "Alain",
  age : 24,
  taille : "175cm",
  sePresenter(){
    console.log(`Bonjour, je m'appelle ${pers3.prenom} ${pers3.nom}`);
  },
}
pers3.sePresenter()



// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

let pers4 = {
  nom : "Louis",
  prenom : "Franck",
  age : 30,
  changerAge(){
    pers4.age = prompt("Changer l'age du pers4");
    alert(`${pers4.prenom} a ${pers4.age}ans`)
  }
}
console.log(pers4.changerAge());
