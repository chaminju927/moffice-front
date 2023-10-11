import Button from "@mui/material/Button";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import React, { useEffect, useMemo } from "react";
import { Typography } from "@material-ui/core";

const theme = createMuiTheme();

const useStyles = makeStyles({
  button: {
    backgroundColor: "#363a54"
  }
});
function ButtonComponent({
  showTable,
  btnName,
  icon,
}: {
  showTable?: () => void;
  btnName: string;
  icon?: any;
}): JSX.Element {
  // const mainTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#363a54",
  //       contrastText: "#fff",
  //     },
  //     secondary: {
  //       main: "#778eea",
  //       contrastText: "#fff",
  //     },
  //   },
  //   typography: {
  //     fontSize: 12,
  //   },

  // });

  // const roundTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#00c0aa",
  //       contrastText: "#fff",
  //     },
  //     secondary: {
  //       main: "#778eea",
  //       contrastText: "#fff",
  //     },
  //   },
  //   typography: {
  //     fontSize: 12,
  //   },
  // });

  const cmmTest = useMemo(() => {
    return () => {
      showTable?.(); //optional chaining
    };
  }, [showTable]);
  const classes = useStyles();
  if (btnName === "선택") {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Button
            className={classes.button}
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
        <ThemeProvider theme={theme}>
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
        <ThemeProvider theme={theme}>
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
