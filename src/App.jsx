import { useState } from "react";
import menuData from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const tempCategories = [
  "All",
  ...new Set(menuItems.map((item) => item.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categoryNames, setCategoryNames] = useState(tempCategories);

  const filterByCategory = (categoryName) => {
    if (categoryName === "All") {
      setMenuItems(menuData);
    } else {
      const newItems = menuData.filter(
        (item) => item.category === categoryName
      );
      setMenuItems(newItems);
    }
  };

  return (
    <main className="menu">
      <h2 className="title">Menu</h2>
      <div className="title-underline"></div>
      <Categories
        categoryNames={categoryNames}
        menuItems={menuItems}
        filterByCategory={filterByCategory}
      />
      <Menu menuItems={menuItems} />
    </main>
  );
};
export default App;
