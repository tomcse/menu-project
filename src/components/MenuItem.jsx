import React, { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const MenuItem = ({ desc, img, price, title }) => {
  const [showInfo, setShowInfo] = useState(false);
  console.log(desc.length);
  console.log(typeof desc.length);
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
            <p>
              {showInfo ? desc : `${desc.substring(0, 130)} `}
              {desc.length > 130 && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setShowInfo(!showInfo);
                  }}
                  style={{ padding: "0.25rem .2rem 0.01rem" }}
                >
                  {showInfo ? <GoTriangleUp /> : <GoTriangleDown />}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
