import React from "react";

import "./ExpenseItem.scss";

import ProgressBox from "../ProgressBox/ProgressBox";

function ExpenseItem(props) {
  const { color, title, currency, sum, ratio } = props;

  const roundSum = Math.round(sum * 1000) / 1000;

  return (
    <div className="expenseItem">
      <div className="expenseItem__wrapper">
        <div className="expenseItem__header-box">
          <div className="expenseItem__header">{title}</div>
          <div className="expenseItem__sum">{`${roundSum} ${currency}`}</div>
        </div>
        <ProgressBox ratio={ratio} color={color} />
      </div>
    </div>
  );
}

export default ExpenseItem;
