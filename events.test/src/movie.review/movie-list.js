import React from "react";
import Movie from "./movie";


export default class MovieList extends React.Component{
    render() {
        let movies = [
            {
                title: "Star Wars",
                image: "/images/starwars.jpeg",
                plot: "Lot's of space and a dog that walks upright",
                reviews: []
            },
            {
                title: "Crazy rich Asians",
                image: "/images/crazy rich asians.jpg",
                plot: "The only thing crazier than love is family",
                reviews: []
            }
        ]

        let arr;
        arr = movies.map( (movie, index) =>
        <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />

        
        )
        return(
            <div>
                {arr}
            </div>
         )

    }
}
