import { useEffect, useState } from "react";
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
}: {
  getStartDate?: any;
  getEndDate?: any;
}): JSX.Element {
  const [dateValue, setDateValue] = useState<any | string>();

  // useEffect(() => {
  //   // const dateNow = new Date();
  //   // const today = dateNow.toISOString().slice(0, 10);
  //   console.log(dateValue);
  // }, [dateValue]);

  const dateChange = (newValue: any) => {
    const dateString = newValue.toISOString("yyyy-mm-dd").slice(0, 10);
    console.log(dateString);
    // setDateValue(dateString);
    if (getStartDate) {
      getStartDate(dateString);
    } else if (getEndDate) {
      getEndDate(dateString);
    } else {
      console.log("props안옴");
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
