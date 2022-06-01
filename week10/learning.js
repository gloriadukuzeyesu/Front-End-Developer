let button=document.getElementById('btn');
let content=document.getElementById('content');

//add event listener

button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye!'){
        content.innerHTML = 'Hello!';
    }else{
        content.innerHTML = 'Goodbye!'
    }
});

document.getElementById('remove').addEventListener('click', () =>{
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
} );

let id=0; 


//event listner took two parameters. Click as what will be done and the functin that will produce an action when clicked.

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id',id++);
    parent.append(newElement);
    document.getElementById('new-text').value = ''
})