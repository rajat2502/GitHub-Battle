import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom"

import {  Navbar,  Nav, NavItem } from 'reactstrap';

const NavBar = ({ handleTheme, theme }) => {

  const [selected, toggleSelected] = useState('Popular');
    
  const arr = ['Popular', 'Battle', 'Profile'];

  return (    
    <Fragment>
      <Navbar color="faded" light>
        <Nav>
            {
                arr.map((item, index) => {
                    return (
                        <Link to={item === 'Popular' ? '/' : item === 'Battle' ? '/battle' : '/profile'} key={index}>
                            <NavItem>
                                <span className={selected === item ? 'selected' : ''} onClick={(e) => toggleSelected(e.target.textContent)} title={item}>{item}</span>
                            </NavItem>
                        </Link>
                    )
                })
                
            }

        </Nav>
        <div mr="2" onClick={handleTheme}>
            <p className="emoji" title="Theme">{theme === "Light" ? "🌚" : "🌞"}</p>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;