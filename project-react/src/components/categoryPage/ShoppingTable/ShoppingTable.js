import React from "react";

import "./ShoppingTable.scss";

import ShoppingRow from "../ShoppingRow/ShoppingRow";

function ShoppingTable({
  categories,
  operations,
  currency,
  deleteOperation
}) {
  const tbody = operations.map(operation => {
    const category = categories.find(
      category => category.id === operation.categoryId
    );

    if (category) {
      return (
        <ShoppingRow
          key={operation.id}
          title={category.title}
          color={category.color}
          date={operation.date}
          value={operation.value}
          currency={currency}
          deleteOperation={() => deleteOperation(operation.id)}
        />
      );
    }
  });

  return (
    <div className="shoppingTable info-card">
      <div className="shoppingTable__wrapper">
        <table className="shoppingTable__table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Категория</th>
              <th scope="col">Дата</th>
              <th scope="col">Сумма</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ShoppingTable;
