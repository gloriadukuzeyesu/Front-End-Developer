// Different ways of fidinding elements into the DOM

// let buttom=document.getElementById('my-buttom');
// console.log(buttom)


// let buttomsByTag=document.getElementsByTagName('button')
// console.log(buttomsByTag);

// let buttomsByClassName=document.getElementsByClassName('my-class')
// console.log(buttomsByClassName);


// let buttomsByCSSSelector=document.querySelectorAll('button.my-class')
// console.log(buttomsByCSSSelector);

// let buttomsByCSSSelector=document.querySelectorAll('.my-class')
// console.log(buttomsByCSSSelector);


class Detail{
    constructor(title,author) {
        this.title = title;
        this.author = author;
    }
}

class Book{
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.library= [];

    }

    addBook(book){
        this.library.push(book);
    }
}


let books = [];
let bookId= 0;

onClick('new-book', () => {
    books.push(new Book (bookId++, getValue('new-book-name')));
    drawDOM();
});

function onClick(id,action){
    let element = document.getElementById(id);
    element.addEventListener('click',action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function drawDOM ({

})

function drawDOM(){
    let bookdiv = document.getElementById('books');
    clearElement(bookdiv);
    for(book of books){
        let table = createBooktable(book);
        let tittle= document.createElement('h2');
        title.innerHTML = book.name;
        tittle.appendChild()



    }
}









