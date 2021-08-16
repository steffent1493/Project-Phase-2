import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MtgCard from "./MtgCard";

function DeckBuilder({ input, onChange, mtgCardsList, parentCallback }) {

    const [mtgMyDeck, setMtgMyDeck] = useState([])
    const [deckCardNumber, setDeckCardNumber] = useState(0)
    const cardsWithImages = mtgCardsList.filter(card => card.imageUrl)
    const cardSet = new Set(cardsWithImages.map(card => card.name))
    const filteredCards = [];
    cardsWithImages.forEach(card => {
        if (cardSet.has(card.name)) {
            cardSet.delete(card.name)
            filteredCards.push(card)
        }

    })

    function handleOnClick(card) {
        setMtgMyDeck(mtgMyDeck.concat(card.imageUrl))
        setDeckCardNumber(deckCardNumber + 1)
        parentCallback(mtgMyDeck)
    }

    return (<div className="deckbuilder">
        <SearchBar input={input} onChange={onChange} cardsInDeck={deckCardNumber} />
        <div className="cardcontainer">
            {filteredCards.map((card) => (
                <MtgCard
                    key={card.id}
                    card={card}
                    handleOnClick={handleOnClick}
                />
            ))}
        </div>
    </div>
    )
}

export default DeckBuilder;