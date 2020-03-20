import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import "./DateBox.scss";

import { DAY_IN_MILLISECONDS } from "../../../utils/constants";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#546e7a"
    }
  }
});

function DateBox({ setSelectedDate }) {
  const [startDate, setStartDate] = useState(0);
  const [finishDate, setFinishDate] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    setSelectedDate(startDate, finishDate);
  };

  const setIntervalForDays = deys => {
    const dateNow = Date.now();
    setFinishDate(dateNow);
    setStartDate(dateNow - DAY_IN_MILLISECONDS * deys);
  };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="dateBox info-card">
          <form className="dateBox__form" onSubmit={handleSubmit}>
            <div className="dateBox__pickers">
              <label htmlFor="startDate" className="dateBox__label">
                От
              </label>
              <div className="dateBox__picker-wrapper">
                <DatePicker
                  name="startDate"
                  disableToolbar
                  autoOk
                  variant="inline"
                  format="dd.MM.yyyy"
                  value={startDate}
                  onChange={setStartDate}
                />
              </div>
              <label htmlFor="startDate" className="dateBox__label">
                До
              </label>
              <div className="dateBox__picker-wrapper">
                <DatePicker
                  name="startDate"
                  disableToolbar
                  autoOk
                  variant="inline"
                  format="dd.MM.yyyy"
                  value={finishDate}
                  onChange={setFinishDate}
                />
              </div>
            </div>

            <input type="submit" value="Сохранить" />
            <button onClick={() => setIntervalForDays(7)}>7 дней</button>
            <button onClick={() => setIntervalForDays(30)}>30 дней</button>
            <button onClick={() => setIntervalForDays(365)}>Год </button>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default DateBox;
