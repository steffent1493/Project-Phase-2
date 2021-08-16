import React from "react";
import mtglogo from "./images/mtglogo.png"
function SearchBar({ input, onChange, cardsInDeck }) {
    return (
        <div className="searchbarimg">
            <button>Cards in Deck :{cardsInDeck}</button>
            <input className="searchbar"
                key="random1"
                value={input}
                placeholder={"search..."}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;