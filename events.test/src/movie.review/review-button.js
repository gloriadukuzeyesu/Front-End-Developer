import React from "react";

export default class ReviewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.onClick(e)
        console.log(e);
    }
    render() {
        return(
            <div>
                 <div className="text-white bg-success card-footer mt-4">
                <p>Write something about the movie?</p>
                <input type="text" id="newReview"/><br /><br />
               <div> 
               <select className="form-select form-select-sm mb-1" name="stars" aria-label="Star Rating" >
                    <option selected >Rate the movie</option>
                    <option value="1 star">1 Star</option>
                    <option value="2 stars">2 Stars</option>
                    <option value="3 stars">3 Stars</option>
                    <option value="4 stars">4 Stars</option>
                    <option value="5 stars">5 Stars</option>
                </select>
               </div>



                
                <button className="btn btn-primary" onClick={this.handleClick} name={this.state.title} id={this.state.id}>Add your review</button>
            </div> <br/>
        

            </div>
           
        )
    }
}

