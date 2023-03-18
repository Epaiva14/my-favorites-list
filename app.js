let a = document.createElement("a");
a.href = 'http://github.com/Epaiva14/my-favorites-list';
a.textContent = 'Favorite movies and things in my closet!';
document.body.appendChild(a);

const list = document.getElementById('my-favorite-books');
let newBook = document.createElement('li');
newBook.textContent = 'The Alchemist';
list.appendChild(newBook);

let newBook1 = document.createElement('li');
newBook1.innerText = 'Outwitting the Devil';
let second = list.children[1];
console.log(second);
list.insertBefore(newBook1, second);

const closetList = document.getElementById('my-closet');
let newCloset = document.createElement('li');
newCloset.textContent = 'Yeezys';
list.appendChild(newCloset);

