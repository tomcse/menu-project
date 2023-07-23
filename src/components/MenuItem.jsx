import React from "react";

const MenuItem = ({ desc, img, price, title }) => {
  return (
    <article>
      <div className="menu-item">
        <img src={img} alt={title} className="img" />
        <div className="item-info">
          <header>
            <h5>{title}</h5>
            <span className="item-price">${price}</span>
          </header>
          <div className="item-text">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
