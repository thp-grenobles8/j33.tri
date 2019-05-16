const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];




  /*  


    Trie les livres par ordre alphabétique.
*/

// Question 1

books.forEach(element => {
  if(element.rented > 0) {
    console.log("Tous les livres ont été empruntés au mois une fois");
  } else {
  console.log("Tous les livres n'ont pas été empruntés");
  } 
});

// Question 2

sortedBooks = books.sort((a, b) => (a.rented > b.rented) ? 1 : -1).reverse()
console.log("Le livre le plus emprunté est :")
console.log(sortedBooks[0])

// Question 3

sortedBooks = books.sort((a, b) => (a.rented > b.rented) ? 1 : -1)
console.log("Le livre le moins emprunté est :")
console.log(sortedBooks[0])

// Question 4

var found = books.find(function(element) {
  return element.id === 873495;
});

console.log("Le livre avec l'ID 873495 est :")
console.log(found);

// Question 5

books.forEach(element => {
  if(element.id === 133712) {
    delete books[books.indexOf(element)]
    console.log("Elément supprimé");
  }
});

console.log(books)

// Question 6

console.log(books.sort((a, b) => (a.title > b.title) ? 1 : -1))
