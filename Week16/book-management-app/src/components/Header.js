import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () =>{
    return (
        <header>
            <h1>
                Book Management Application
            </h1>
            <hr/>
            <div className='Links'>
                <NavLink to ="/" className= "link" activeClassName="active" exact> Books List </NavLink>
                <NavLink to="/add"className="link" activeClassName="active"> Add a Book </NavLink>
            </div>
        </header>
    );
};

export default Header;