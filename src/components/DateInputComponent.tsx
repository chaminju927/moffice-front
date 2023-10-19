import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});
function DateInputComponent(): JSX.Element {
  const [startDate, setStartDate] = useState<any>();
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  const setDate = (e) => {
    setStartDate(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="date-picker-container">
          <DatePicker
            defaultValue={today}
            sx={{ width: 150 }}
            onChange={setDate}
          />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default DateInputComponent;
