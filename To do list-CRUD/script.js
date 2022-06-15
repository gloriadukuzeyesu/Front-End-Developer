//CRUD stands for Create Read Update Delete 


var app = new function (){
    this.el= document.getElementById('tasks');
    this.tasks= [];
     
     // Read items
    this.FetchAll = function (){
        var data= '';

        if (this.tasks.length >0){
            for( i=0; i<this.tasks.length; i++){
                data += '<tr>';
                data += '<td>' +(i+1)+ '. ' + this.tasks[i] + '</td>';
                data += '<td><button onclick="app.Edit('+i+')" class= "btn btn-warning">Edit</button></td>'
                data += '<td><button onclick="app.Delete('+i+')" class= "btn btn-danger">Delete</button></td>'
                data += '<tr>';
                // +i+ means passing in the appropriate array item. 
            }
        }

        this.Count (this.tasks.length);
        return this.el.innerHTML = data
    };
    

    //Create new items  
    this.Add = function (){ 
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value='';
            this.FetchAll();
        }

    };

    //update items
    this.Edit = function (item){
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function (){
            var task = el.value;
            if (task){
                self.tasks.splice(item,1, task.trim());
                self.FetchAll(); //refresh the todo list
                CloseInput();
            }
        }


    };

     //delete items 
    this.Delete = function (item){
        this.tasks.splice(item,1)
        this.FetchAll();

    };
     


    //display amount of things we have in our list 
    this.Count = function (data){
        var el =document.getElementById('counter');
        var name= 'Tasks';
        if(data){
            if(data == 1){
                name = 'Task';
            }
            el.innerHTML = data+' '+name;
        }else{
            el.innerHTML = "No "+name;
        }

    };

}


// render or always display updated list
app.FetchAll( );



function CloseInput () {
    document.getElementById('edit-box').style.display = 'none';
}