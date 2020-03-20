import React from "react";

import "./OperationList.scss";

import DateRow from "../DateRow/DateRow";
import OperationRow from "../OperationRow/OperationRow";

function OperationList({ operations, categories, currency }) {
  const sortOperations = operations.sort((a, b) => b.date - a.date);

  const rows = [];
  let lastDay = null;

  sortOperations.forEach(operation => {
    const currentDay = new Date(operation.date).setHours(0, 0, 0, 0);
    const category = categories.find(category => {
      return category.id === operation.categoryId;
    });
    if (!category) return;
    if (currentDay !== lastDay) {
      lastDay = currentDay;
      rows.push(<DateRow date={currentDay} />);
    }

    rows.push(
      <OperationRow
        title={category.title}
        color={category.color}
        value={operation.value}
        icon={category.icon}
        currency={currency}
      />
    );
  });

  return (
    <div className="operationList info-card">
      <div className="operationList__wrapper">
        <table class="table">
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default OperationList;
