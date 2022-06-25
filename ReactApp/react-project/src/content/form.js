import React from "react";

export default class Forms extends React.Component {
    render(){
        return(
            
            <form>
            <h3> Log in</h3>
                <div className="mb-3">
                    <label for=" exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label for=" exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
            
          
        );
    }
}