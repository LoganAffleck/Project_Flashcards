import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route} from "react-router-dom";

//import components...
import HomeDeck from "./HomeDeck";
import Study from "./Study/index";
import View from "./ViewDeck";
import Create from "./Create";
import EditDeck from './Edit/EditDeck';
import CreateCard from './Create/CreateCard'
import EditCard from './Edit/EditCard';

function Layout() {


  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        
        <Switch>
        {/* This Route represents the home screen contents */}
          <Route exact path="/">
            <HomeDeck />
          </Route>

          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>

          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>

          <Route exact path='/decks/new'>
            <Create />
          </Route>

          <Route exact path='/decks/:deckId'>
            <View />
          </Route>

          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>

          <Route path='/decks/:deckId/cards/new'>
            <CreateCard />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>


      </div>
    </>
  );
}

export default Layout;
