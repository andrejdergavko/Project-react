import React from "react";
import "./Category.scss";

function Category(props) {
  const { title, value, color, currency, onClick, icon } = props;
  console.log(icon)
  return (
    <div className="category">
      <div className="category__header">{title}</div>
      <div
        className="category__circle"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        <img
          className="category__icon"
          src={icon}
        />
      </div>
      <div className="category__sum">
        {value}
        <span className="category__currency">{currency}</span>
      </div>
    </div>
  );
}

export default Category;
