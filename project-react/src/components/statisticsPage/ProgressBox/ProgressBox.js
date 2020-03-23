import React from "react";

import "./ProgressBox.scss";

function ProgressBox({ ratio, color }) {
  const percent = Math.round((ratio * 100 * 100) / 100);

  return (
    <div className="progressBox">
      <div className="progressBox__line-box">
        <div className="progressBox__line-bg"></div>
        <div
          className="progressBox__line"
          style={{ width: `${percent}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="progressBox__percent">{`${percent}%`}</div>
    </div>
  );
}

export default ProgressBox;
