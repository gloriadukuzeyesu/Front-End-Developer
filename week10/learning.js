

    // document.getElementById('addNewBook').addEventListener('click', () =>{
    //     var table =document.getElementById('table');
    //     // var row = document.createElement('body');
    //     // var row = table.insertRow(0);
    //     // var cell1 = row.insertCell()
    //     // var cell2 = row.insertCell();
    //     // var cell3 = row.insertCell();
    //     // var cell4 = row.insertCell();
    //     // var cell5 = row.insertCell();

    //      row = table.insertRow(2);
    //     row.insertCell(0).innerHTML=document.getElementById("cellId");
    //     row.insertCell(1).innerHTML=document.getElementById("cellId");
    //     row.insertCell(2).innerHTML=document.getElementById("cellId");
    //     row.insertCell(3).innerHTML=document.getElementById("cellId");
    //     row.insertCell(4).innerHTML=document.getElementById("cellId");


        
    //     // row.innerHTML = document.getElementById('#nbr,#titleId, #authorId, #genreId, #readmoreId').value;
    //     table.appendChild(row);
    //     document.getElementById("cellId").value = '';
    //    });



document.getElementById('p-button').addEventListener('click', ()=>{
    var parent = document.getElementById('p-div');
    var newElement= document.getElementById('p-input');
    newElement.innerHTML = document.getElementById('p-input').value;
    document.getElementById('p-input').value = ' ';

});


