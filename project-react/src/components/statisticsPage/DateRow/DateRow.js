import React from "react";

import "./DateRow.scss";

import { DAYS_OF_THE_WEEK, MONTHS } from "../../../utils/constants";

function DateRow(props) {
  const date = new Date(props.date);

  return (
    <tr className="dateRow">
      <td colspan="3">
        <div className="dateRow__number">{date.getDate()}</div>
        <div className="dateRow__date-box">
          <div className="dateRow__day">
            {DAYS_OF_THE_WEEK[date.getDay() - 1]}
          </div>
          <div className="dateRow__date">{`${
            MONTHS[date.getMonth()]
          } ${date.getFullYear()}`}</div>
        </div>
      </td>
    </tr>
  );
}

export default DateRow;
