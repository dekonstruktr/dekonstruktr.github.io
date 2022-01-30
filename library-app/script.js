let myLibrary = [];
const library = document.getElementById("content-wrapper");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("pages");
const addMenu = document.getElementById("add-book-button"); 
const newButton = document.getElementById("new-book-button");
var mediaQueryX = window.matchMedia("(min-width: 480px)")




function openNav() {
  if (window.matchMedia("(max-width: 480px)").matches){
document.getElementById("new-book-wrapper").style.width = "100%";
// document.getElementById("new-book").style.width = "100vw";
  }else{
  document.getElementById("new-book-wrapper").style.width = "30vw";
  library.style.marginLeft = "30vw";
 
}}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("new-book-wrapper").style.width = "0";
  library.style.marginLeft = "0";
} 


function Book(author, title, pages, read){
 let newBook = {
 author,
 title,
 pages,
 read,
 readYet: function(){
  let readOrNot = "";
  read ? readOrNot = "Already Read": readOrNot = "Not Read Yet";
  return readOrNot;
 },

 info:  function(){ 
     let readOrNot = "";
     read ? readOrNot = "Already Read": readOrNot = "Not Read Yet";
     return `${title} by ${author}, ${pages} pages, ${readOrNot}.`;
}}
return newBook;
}

function addBookToLibrary(author, title, pages, read) {
  myLibrary.push(new Book(author, title, pages, read));
}

function bookCards(obj){
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    let titleSpan = document.createElement("div");
    titleSpan.classList.add("title-span");
    let delButton = document.createElement("p");
    delButton.classList.add("delete-button");
    delButton.innerText = "X";
    
    titleSpan.appendChild(delButton);
    
    let title = document.createElement("h1");
    title.innerText = obj.title;
    titleSpan.appendChild(title);
    bookDiv.appendChild(titleSpan); 
    let contentBox = document.createElement("div");
    contentBox.classList.add("book-info")
    
    let author = document.createElement("h2");
    author.innerText = "By " + obj.author;
    contentBox.appendChild(author);
    let pages = document.createElement("h2");
    pages.innerText = "Pages: " + obj.pages;
    contentBox.appendChild(pages);

    let readYet = document.createElement("h2");
    readYet.innerText = obj.readYet();
    contentBox.appendChild(readYet);
    bookDiv.appendChild(contentBox);
    library.appendChild(bookDiv);
}

const reset = () => library.innerHTML = "" ;

const inputClear = (author, title, pages) =>{
  author.value = "";
  title.value = "";
  pages.value ="";
}


const bookBuilder = () =>{
  reset();
  let author = document.getElementById("author");
  let title = document.getElementById("title");
  let pages = document.getElementById("pages");
  if(author.value && title.value && pages.value){
    addBookToLibrary(author.value, title.value, pages.value);
  }
    myLibrary.forEach(book => bookCards(book));
  deleteBook();
  inputClear(author, title, pages);
}

const deleteBook = () =>{
let delButton = document.querySelectorAll('.delete-button');
for (var i = 0; i < delButton.length; i++) {    
    delButton[i].addEventListener('click', ((j) => {         
    return function() {
      myLibrary.splice(j, 1);
      bookBuilder();
    }
  })(i))
}
}

newButton.addEventListener("click", bookBuilder);


addBookToLibrary("J.R.R. Tolkien", "The Hobbit", 350, true);
addBookToLibrary("God", "The Bible", 1000, false);
addBookToLibrary("Dr. Seuss", "The Grinch", 20, true);

bookBuilder();
//myLibrary.forEach(book => bookCards(book));





