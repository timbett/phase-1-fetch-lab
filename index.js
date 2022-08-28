const fetchBooks =() =>{
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp)=>resp.json())
  .then((bookTitles)=>renderBooks(bookTitles))
  // return fetch("http://localhost:3000/users")
  
}

function renderBooks(books) {
  books.forEach(book => {
    const main = document.querySelector('main');
    const h2 = document.createElement('h2');
    h2.innerHTML += book.name;
    main.appendChild(h2);
   
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks());
