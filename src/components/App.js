import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header';
import Filter from './Filter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterByCategory, setFilterByCategory] = useState('All');

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleCategoryChange = (category) => {
    setFilterByCategory (category);
  };

  const appClass = isDarkMode ? 'App dark' : 'App light';

  /*return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );*/

  return (
    <div className={appClass}>
      <Header onDarkModeClick={onDarkModeClick} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={itemData} onCategoryChange={filterByCategory} />
    </div>
  );
}

export default App;
