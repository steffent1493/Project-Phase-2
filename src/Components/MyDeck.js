import React from "react";

function MyDeck({ myDeckCard }) {

    return <div className="myDeckCard">
        <img src={myDeckCard} alt="empty" />
    </div>;

}

export default MyDeck;