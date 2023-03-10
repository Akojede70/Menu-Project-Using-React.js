import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// the all is for the ALL BUTTON, the "items" refer to all the array in the data file
// creates a new Set object from the array of category, which is the different button. Breakfast, Lunch, Shakes, Dinner.

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      // if category in the array is equall to all set all the itmes in the data file in the ALL button
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    // each item in each category i.e. breakfast, lunch and dinner. e.t.c.
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
