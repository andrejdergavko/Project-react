import React, { useState, useEffect } from "react";
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

function DateBox({ setSelectedDate, selectedDate }) {
  const [startDate, setStartDate] = useState(new Date(selectedDate.startDate));
  const [finishDate, setFinishDate] = useState(
    new Date(selectedDate.finishDate)
  );

  useEffect(() => {
    setSelectedDate(startDate.getTime(), finishDate.setHours(23, 59, 59, 999));
  }, [startDate, finishDate, setSelectedDate]);

  const setIntervalForDays = deys => {
    const dateNow = new Date();
    setStartDate(
      new Date(new Date().setHours(0, 0, 0, 0) - DAY_IN_MILLISECONDS * deys)
    );
    setFinishDate(dateNow);
  };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="dateBox info-card">
          <form className="dateBox__form">
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
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(0)}
            >
              Сегодня
            </button>
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(6)}
            >
              7 дней
            </button>
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(30)}
            >
              31 дней
            </button>
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(364)}
            >
              Год
            </button>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default DateBox;
