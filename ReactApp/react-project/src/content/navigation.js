import React from "react";

export default class Navlinks extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" href="#" >About</a>
                            <a className="nav-link active" href="#" >Contact</a>
                            <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true" >Features</a>
                        </div>        
                    </div>
                </div>    
            </nav>        
        )
    }
}


