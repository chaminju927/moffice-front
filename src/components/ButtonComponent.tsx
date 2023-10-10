import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

function ButtonComponent(props): JSX.Element {
  const [btnName, setBtnName] = useState({

  });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#363a54",
        contrastText: "#fff",
      },
      secondary: {
        main:  "#778eea",
      }, 
    },
    typography: {
      fontSize: 12,
    },
  
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          className="Button"
          size="small"
          variant="contained"
          startIcon={<SearchIcon sx={{ width: 20 }} />}
        >
          검색
        </Button>
      </ThemeProvider>
    </div>
  );
}
export default ButtonComponent;
