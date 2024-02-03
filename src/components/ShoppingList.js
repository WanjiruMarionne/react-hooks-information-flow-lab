import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    // Check if onCategoryChange is a function before calling it
    if (typeof onCategoryChange === 'function') {
      onCategoryChange(category);
    }
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
