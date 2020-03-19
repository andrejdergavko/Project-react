import React from "react";
import "./ShoppingRow.scss";

function getDateToString(dateObject) {
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${date}.${month}.${year}`;
}

function ShoppingRow({
  title,
  color,
  date,
  value,
  currency,
  deleteOperation
}) {


  return (
    <tr className="shoppingRow">
      <th className="shoppingRow__circle-col">
        <div
          className="shoppingRow__circle"
          style={{ backgroundColor: color }}
        ></div>
      </th>
      <td>{title}</td>
      <td>{getDateToString(new Date(date))}</td>
      <td className="shoppingRow__sum">
        {value}
        <span className="shoppingRow__currency">{currency}</span>
      </td>
      <td>
        <button className="shoppingRow__delete-button" onClick={deleteOperation}>&#215;</button>
      </td>
    </tr>
  );
}

export default ShoppingRow;
