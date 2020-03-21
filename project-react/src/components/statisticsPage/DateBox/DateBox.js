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
    setSelectedDate(startDate.getTime(), finishDate.getTime());
  }, [startDate, finishDate]);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(53563);
  //   setSelectedDate(startDate.getTime(), finishDate.getTime());
  // };

  const setIntervalForDays = deys => {
    const dateNow = new Date();
    setFinishDate(dateNow);
    setStartDate(new Date(dateNow.getTime() - DAY_IN_MILLISECONDS * deys));
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
              onClick={() => setIntervalForDays(1)}
            >
              Сегодня
            </button>
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(7)}
            >
              7 дней
            </button>
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(31)}
            >
              31 дней
            </button>
            <button
              type="button"
              className="dateBox__button"
              onClick={() => setIntervalForDays(365)}
            >
              Год{" "}
            </button>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default DateBox;
