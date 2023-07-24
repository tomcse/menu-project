import React from "react";
import Category from "./Category";

const Categories = ({ categoryNames, menuItems, filterByCategory }) => {
  return (
    <section className="btn-container">
      {categoryNames.map((categoryName) => {
        return (
          <Category
            key={categoryName}
            categoryName={categoryName}
            menuItems={menuItems}
            filterByCategory={filterByCategory}
          />
        );
      })}
    </section>
  );
};

export default Categories;
