import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});
function DateInputComponent(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="date-picker-container">
          <DatePicker
            format="YYYY-MM-DD"
            defaultValue={dayjs("2023-10-10")}
            sx={{ width: 150 }}
          />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default DateInputComponent;
