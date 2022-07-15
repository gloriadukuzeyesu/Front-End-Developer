import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) =>
              <li key={index}>
                  Name: {room.name} 
                  Area: {room.area}
                  <button onClick={e => this.props.deleteRoom(e, this.props.data,room)}>Delete</button>
              </li>)
            :null;
            return(
                <div>
                    {/* show the name of the house */}
                    <h1>{this.props.data.name}</h1> 
                    <ul>
                        {rooms}
                    </ul>
                    <NewRoomForm
                    addNewRoom={this.props.addNewRoom} data={this.props.data}/>
                </div>
            );
    }
}

// Itirate through the rooms, create a list of rooms, delete one room and show the name 
// of the rooms put those name in a list
// and add a newform to the room 