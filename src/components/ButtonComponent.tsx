import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useMemo, useState } from "react";

function ButtonComponent({
  showTable,
  btnName,
  icon,
}: {
  showTable?: () => void;
  btnName: string;
  icon?: any;
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
    // components: {
    //   MuiButton: {
    //     styleOverrides: {
    //       root: ({ theme }) => ({
    //         "&:hover": {
    //           backgroundColor: theme.palette.secondary,
    //         },
    //       }),
    //     },
    //   },
    // },
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

  const cmmTest = useMemo(() => {
    return () => {
      showTable?.(); //optional chaining
    };
  }, [showTable]);

  if (btnName === "선택") {
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <Button
            // className="Button"
            size="medium"
            color="primary"
            variant="outlined"
            startIcon={icon}
            //onClick={cmmTest}
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
            // className="Button"
            size="medium"
            color="primary"
            variant="contained"
            startIcon={icon}
            onClick={cmmTest}
          >
            {btnName}
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}
export default ButtonComponent;
