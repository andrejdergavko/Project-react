import React from "react";

import "./TopSpanding.scss";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

function TopSpanding({ operations, categories, currency }) {
  const generalSum = operations.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  const items = categories.map(category => {
    const categorySum = operations.reduce((sum, operation) => {
      if (category.id === operation.categoryId) {
        return sum + operation.value;
      } else {
        return sum;
      }
    }, 0);
    return {
      color: category.color,
      title: category.title,
      currency: currency,
      sum: categorySum,
      ratio: categorySum ? categorySum / generalSum : 0
    };
  });

  const sortItemsByRatio = items.sort((a, b) => b.ratio - a.ratio);

  return (
    <div className="topSpanding info-card">
      <div className="topSpanding__wrapper">
        {sortItemsByRatio.map(item => {
          return (
            <ExpenseItem
              color={item.color}
              title={item.title}
              currency={currency}
              sum={item.sum}
              ratio={item.ratio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopSpanding;
