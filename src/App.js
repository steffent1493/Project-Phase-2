import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import DeckBuilder from './Components/DeckBuilder';
import MyDeck from './Components/MyDeck';


function App() {

  const [input, setInput] = useState('');
  const [mtgCardsList, setMtgCardsList] = useState();
  const [newMtgMyDeck, setNewMtgMyDeck] = useState([]);

  const fetchData = async (searchInput) => {
    return await fetch(`https://api.magicthegathering.io/v1/cards?name=${searchInput}`)
      .then(res => res.json())
      .then(data => {
        setMtgCardsList(data.cards)
      })
  }
  const updateInput = async (input) => {
    setInput(input);
    await fetchData(input);
  }

  useEffect(() => { fetchData("") }, []);
  
  function parentCallback(mtgMyDeck) {
    setNewMtgMyDeck(mtgMyDeck)
  }

  
  return (
    <div >
      <NavBar />
      <Switch>
        <Route exact path="/DeckBuilder">
          {mtgCardsList && <DeckBuilder input={input} onChange={updateInput} mtgCardsList={mtgCardsList} parentCallback={parentCallback} />}
        </Route>
        <Route exact path="/MyDeck">
          {newMtgMyDeck.map(myDeckCard => (<div className="mydeck"><MyDeck
            myDeckCard={myDeckCard}
          />
          </div>))}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
