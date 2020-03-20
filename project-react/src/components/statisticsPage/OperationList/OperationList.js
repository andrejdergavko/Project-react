import React from "react";

import "./OperationList.scss";

import DateRow from "../DateRow/DateRow";
import OperationRow from "../OperationRow/OperationRow";

function OperationList(props) {
  return (
    <div className="operationList info-card">
      <table class="table">
        <tbody>
          <DateRow />
          <OperationRow />
        </tbody>
      </table>
    </div>
  );
}

export default OperationList;
