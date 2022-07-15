import React from "react";
import {House} from './House';
import { housesAPi } from "../rest/HousesAPi";

export  class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesAPi.get();
        this.setState({ houses });
    };

    updateHouse = async (updateHouse) => {
        await housesAPi.put(updateHouse);
        this.fetchHouses();
    }; 

    //render method

    render (){
        return (
            <div className= "house-list">
                {this.state.houses.map((house) => (
                    <House
                    house = {house }
                    key = {house._id}
                    updateHouse = {this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}


