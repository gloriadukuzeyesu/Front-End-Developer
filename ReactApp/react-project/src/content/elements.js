import React from "react";
import Navlinks from "./navigation";
import Forms  from "./form";


function Container (props) {
    return(
        <div className="container-fluid">
            <div className="row">
                <Navlinks/>
            </div>
            <div>
                <Forms/>
            </div>
        </div>
    )
}

export default Container;





