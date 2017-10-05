import React from 'react';

const Header = (props) =>{
  return(
    <ul className="nav header">
      <li onClick={props.reset} className="li-item"><h1>Zombie Survival</h1></li>
    </ul>
    )
}

export default Header;
