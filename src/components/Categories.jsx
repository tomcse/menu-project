import React from "react";
import Category from "./Category";

const Categories = ({ categoryNames, filterByCategory }) => {
  return (
    <section className="btn-container">
      {categoryNames.map((categoryName) => {
        return (
          <Category
            key={categoryName}
            categoryName={categoryName}
            filterByCategory={filterByCategory}
          />
        );
      })}
    </section>
  );
};

export default Categories;
