import React from "react";

import "./ExpenseItem.scss";

import ProgressBox from "../ProgressBox/ProgressBox";

function ExpenseItem(props) {
  const { color, title, currency, sum, ratio } = props;
  return (
    <div className="expenseItem">
      {/* <div className="expenseItem__icon-box">
        <div className="expenseItem__circle" style={{backgroundColor: color}}>
          <img className="expenseItem__icon" />
        </div>
      </div> */}
      <div className="expenseItem__wrapper">
        <div className="expenseItem__header-box">
          <div className="expenseItem__header">{title}</div>
          <div className="expenseItem__sum">{`${sum} ${currency}`}</div>
        </div>
        <ProgressBox ratio={ratio} color={color}/>
      </div>
    </div>
  );
}

export default ExpenseItem;
