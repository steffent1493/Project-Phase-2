import React from "react";
import { NavLink } from "react-router-dom";
import home from './images/home.png'
import mydeck from './images/mydeck.png'
import deckbuilder from './images/deckbuilder.png'

function NavBar() {
  return <div className="navbar">

    <NavLink to="/"><img className="homebtn" src={home} alt="Home" /></NavLink>
    <NavLink to="/DeckBuilder"><img className="deckbuilderbtn" src={deckbuilder} alt="DeckBuilder" /></NavLink>
    <NavLink to="/MyDeck"><img className="mydeckbtn" src={mydeck} alt="MyDeck" /></NavLink>

  </div>;
}

export default NavBar;
