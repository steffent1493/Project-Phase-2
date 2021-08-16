import React from "react";


function MtgCard({ card, handleOnClick }) {
  return (
    <div key={card.id} className="cardTile">
      <img key={card.id} src={card.imageUrl} alt="404" onClick={() => handleOnClick(card)} />
    </div>
  )
}

export default MtgCard;