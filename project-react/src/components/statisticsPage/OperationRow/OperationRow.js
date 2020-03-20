import React from "react";
import "./OperationRow.scss";

function OperationRow(props) {
  const { title, color, value, icon, currency } = props;

  return (
    <tr className="operationRow">
      <td className="operationRow__icon-box">
        <div
          className="operationRow__circle"
          style={{ backgroundColor: color }}
        >
          {icon && <img className="operationRow__icon" src={icon} />}
        </div>
      </td>
      <td className="operationRow__category">{title}</td>
      <td className="operationRow__value-box">
        <div className="operationRow__value">{value}</div>
        <div className="operationRow__currency">{currency}</div>
      </td>
    </tr>
  );
}

export default OperationRow;
