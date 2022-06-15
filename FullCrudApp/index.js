class House {
    constructor (name) {
        this.name = name;
        this.rooms = [];
    }
    addRoom(name, area) {
        this.rooms.push(new Room(name, area));
    }
}

class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
        
    }
}

// this how we ar gonna bring in our APIs in other words, fetch info from server
class HouseService {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    static getAllHouses(){
        return $.get(this.url);  // this will return all the houses from this url
    }

    static getHouse(id) {
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house){
        return $.post(this.url, house);
    }
    static updateHouse (house) {
        return $.ajax({
            url: this.url + `/${house._id}`, // .id used here becuase that is the id the data base will automatically assign to our house when we get it
            dataType: "json",
            data: JSON.stringify (house),
            contentType: 'application/json',
            type: "PUT"

            // contentType: "application/json; charset=utf-8",

        });
    }

    static deleteHouse (id) {  // will delete the house. It just need the ID for the house to delete it. That's how API works
        return $.ajax ({
            url: `${this.url}/${id}`,
            type: 'DELETE'
        });
    }
}


class DOMManager {
    static houses; 

    static getAllHouses(){
        HouseService.getAllHouses().then(houses => this.render(houses));   
    }
    //create a new house 
    static createHouse(name) {
        HouseService.createHouse(new House(name))
        .then( () => HouseService.getAllHouses())
        .then( (houses) => { this.render(houses);})


        // .then(() => {
        //     return HouseService.getAllHouses();
        // })
        // .then((houses) => this.render(houses));

    }

    // fx that allows us to delete a house 
    static deleteHouse(id){
        HouseService.deleteHouse(id)
        .then( () => {
            return HouseService.getAllHouses();
        })
        .then((houses) => this.render(houses));
    }


    static addRoom(id) {
        for (let house of this.houses){
            if(house._id == id) {
                house.rooms.push(new Room($(`#${house._id}-room-name`).val(), $(`#${house._id}-room-area`).val()));
                HouseService.updateHouse(house) 
                .then(() => {
                    return HouseService.getAllHouses();
                })
                .then((houses) => this.render(houses));
            }
        }
    }
 //function to delete a house is working so far
    static deleteRoom(houseId, roomId){
        for (let house of this.houses){
            if (house._id == houseId) {
                for ( let room of house.rooms) {
                    if (room._id == roomId) {
                        house.rooms.splice(house.rooms.indexOf(room), 1);
                        HouseService.updateHouse(house)
                        .then(() => {
                            return HouseService.getAllHouses();
                        })
                        .then((houses) => this.render(houses));
                    }
                }
            }
        }
    }
   






    static render(houses) {
        this.houses = houses;
        $('#app').empty();
        for (let house of houses) { // this for loop renders info on a certain house
            $('#app').prepend( //preprend method adds elements at the top of children elements
                `<div id="${house._id}" class="card">
                    <div class=" card-header">
                      <h2> ${house.name}</h2>
                      <button type="button" class="btn btn-danger" onclick="DOMManager.deleteHouse('${house._id}')">Delete</button> 
                    </div>

                    <div class="card-body">
                        <div class="card">
                           <div class="row"> 
                               <div class="col-sm">
                               <input type="text" id= "${house._id}-room-name" class="form-control" placeholder="Room Name">
                               </div>
                               <div class="col-sm"> 
                               <input type="text" id= "${house._id}-room-area" class="form-control" placeholder="Room Area">
                               </div>
                            </div>
                            <button type="button" class="btn btn-primary form-control" id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')">Add</button>
 
                        </div>
                    </div?
                </div><br>`
            );

            for (let room of house.rooms){ //this second loop is nested in the first loop. It renders info about room in a certain house
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                    <span id="name-${room._id}"> <strong>Name: </strong> ${room.name}</span>
                    <span id="area-${room._id}"> <strong>Area: </strong> ${room.area}</span>
                    <button type="button" class="btn btn-danger" onclick="DOMManager.deleteRoom('${house._id}' , '${room._id}')">Delete Room</button> `
                    
                );
            }
        }
    }
}

//create new house button was created in Html and this is how to render it in js (make it work from js)
$('#create-new-house').click(() => {
    DOMManager.createHouse( $ ('#new-house-name').val());
    $ ('#new-house-name').val('');

})



DOMManager.getAllHouses();