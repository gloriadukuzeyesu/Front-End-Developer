import React from 'react';
export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: ''
        }
        this.updateStar = this.updateStar.bind(this);
    }

    updateStar(event) {
       this.props.updateStars(event.target.value);
    }

    render() {
        return(
            <div className="row">
            <div className="col-6 mb-3 mx-auto">
                <select className="form-select" name="stars" aria-label="Star Rating" onChange={this.updateStar}>
                    <option selected disabled>Leave a Rating</option>
                    <option value="1 star">1 Star</option>
                    <option value="2 stars">2 Stars</option>
                    <option value="3 stars">3 Stars</option>
                    <option value="4 stars">4 Stars</option>
                    <option value="5 stars">5 Stars</option>
                </select>
            </div>
        </div>
        );
    }
}

import React from 'react'
import ReactStars from 'react-stars'
import React from 'react'
import { render } from 'react-dom'
 
const ratingChanged = (newRating) => {
  console.log(newRating)
}
 
render(<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />,
 
  document.getElementById('where-to-render')
);