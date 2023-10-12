import Button from "@mui/material/Button";
// import {
//   ThemeProvider,
//   createMuiTheme,
//   makeStyles,
// } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useMemo } from "react";

function ButtonComponent({
  searchTable,
  btnName,
  icon,
  rowNo,
}: {
  searchTable?: () => void;
  btnName: string;
  icon?: any;
  rowNo?: number;
}): JSX.Element {
  const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#363a54",
        contrastText: "#fff",
      },
      secondary: {
        main: "#778eea",
        contrastText: "#fff",
      },
    },
    typography: {
      fontSize: 12,
    },
  });

  const roundTheme = createTheme({
    palette: {
      primary: {
        main: "#00c0aa",
        contrastText: "#fff",
      },
      secondary: {
        main: "#778eea",
        contrastText: "#fff",
      },
    },
    typography: {
      fontSize: 12,
    },
  });

  const Test = useMemo(() => {
    return () => {
      searchTable?.(); //optional chaining
    };
  }, [searchTable]);

  const Select = useMemo(() => {
    return () => {
      searchTable?.();
      console.log(rowNo);
      
    };
  }, [searchTable]);

  if (btnName === "선택") {
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <Button
            className="Button"
            size="medium"
            color="primary"
            variant="outlined"
            startIcon={icon}
            onClick={Select}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  } else if (btnName === "출장신청") {
    return (
      <div>
        <ThemeProvider theme={roundTheme}>
          <Button
            size="medium"
            className="buttonText"
            color="primary"
            variant="contained"
            startIcon={icon}
            sx={{
              borderRadius: 20,
              height: 30,
            }}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            startIcon={icon}
            onClick={Test}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}
export default ButtonComponent;
