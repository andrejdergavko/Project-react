import React, { useState, useEffect } from "react";
import "./Datepicker.scss";

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#546e7a"
    }
  }
});

function Datepicker(props) {
  const [date, setDate] = useState(new Date());
  useEffect(()=>{

  }, [date])

  return (
    <div className="datepicker">
      <div className="datepicker__label">Дата </div>
      <MuiPickersUtilsProvider
        className="datepicker__provider"
        utils={DateFnsUtils}
      >
        <ThemeProvider theme={defaultMaterialTheme}>
          <DatePicker
            disableToolbar
            autoOk
            variant="inline"
            format="dd.MM.yyyy"
            value={date}
            onChange={setDate}
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default Datepicker;
