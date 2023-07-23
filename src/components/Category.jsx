import React from "react";

const Category = ({ categoryName, filterByCategory }) => {
  return (
    <button
      className="btn"
      type="button"
      onClick={() => filterByCategory(categoryName)}
    >
      {categoryName}
    </button>
  );
};

export default Category;
