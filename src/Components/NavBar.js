import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom"

import {  Navbar,  Nav, NavItem } from 'reactstrap';

const NavBar = ({ handleTheme, theme }) => {

  const [selected, toggleSelected] = useState('Popular');
    
  const arr = ['Popular', 'Battle'];

  return (    
    <Fragment>
      <Navbar color="faded" light>
        <Nav>
            {
                arr.map((item, index) => {
                    return (
                        <Link to={item === 'Popular' ? '/' : '/battle'} key={index}>
                            <NavItem>
                                <span className={selected === item ? 'selected' : ''} onClick={(e) => toggleSelected(e.target.textContent)} title={item}>{item}</span>
                            </NavItem>
                        </Link>  
                    )
                })
            }
        </Nav>
       <aside>
       <dark-mode-toggle
           id="dark-mode-toggle-1"
           legend="Theme Switcher"
           appearance="switch"
           dark="Dark"
           light="Light"
           remember="Remember this">
           </dark-mode-toggle>
           </aside>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;