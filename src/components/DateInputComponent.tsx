import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

function DateInputComponent({
  getStartDate, // MainComponent에서 보내는 콜백함수
  getEndDate,
  applyStartDate,
  applyEndDate,
}: {
  getStartDate?: any;
  getEndDate?: any;
  applyStartDate?: any;
  applyEndDate?: any;
}): JSX.Element {
  const [dateValue, setDateValue] = useState<string>();

  // useEffect(() => {
  //   // const dateNow = new Date();
  //   // const today = dateNow.toISOString().slice(0, 10);
  //   console.log(dateValue);
  // }, [dateValue]);

  const dateChange = (newValue) => {
    // const dateString = newValue.toISOString("yyyy-mm-dd").slice(0, 10);
    const inputDate = newValue.format("YYYY-MM-DD");
    console.log(inputDate);
    setDateValue(inputDate);

    if (getStartDate) {
      getStartDate(inputDate);
    } else if (getEndDate) {
      getEndDate(inputDate);
    } else if (applyStartDate) {
      applyStartDate(inputDate);
    } else if (applyEndDate) {
      applyEndDate(inputDate);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="date-picker-container">
          <DatePicker
            defaultValue={dayjs("2023-10-20")}
            sx={{ width: 160 }}
            value={dayjs(dateValue)}
            onChange={dateChange}
          />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default DateInputComponent;
