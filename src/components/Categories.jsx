import React from "react";
import Category from "./Category";

const Categories = ({ categoryNames, menuItems, filterByCategory }) => {
  return (
    <section className="btn-container">
      {categoryNames.map((categoryName, index) => {
        return (
          <Category
            key={index}
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
