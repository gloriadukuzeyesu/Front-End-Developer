



document.getElementById('p-button').addEventListener('click', () => {
    var parent = document.getElementById('p-div');
    var newElement= document.createElement('p');
    newElement.innerHTML = document.getElementById('p-input').value;
    parent.appendChild(newElement);
    document.getElementById('p-input').value = ' ';

});
