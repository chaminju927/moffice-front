import React, { ReactNode } from "react";
import MUITable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

interface CustomTableProps {
  children: ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ children }) => {
  return (
    <MUITable
      sx={{
        borderCollapse: "collapse",
        "& th, & td": {
          border: "1px solid #d2d6e0",
          padding: "8px",
          textAlign: "center",
        },
      }}
    >
      {children}
    </MUITable>
  );
};

function ModalTableComponent(): JSX.Element {
  return (
    <div>
      <TableContainer className="subTable">
        <CustomTable>
          <TableHead>
            <TableRow>
              <TableCell>이름/사번</TableCell>
              <TableCell colSpan={3}></TableCell>
              <TableCell>
                <Button
                  className="btns"
                  variant="contained"
                  style={{
                    backgroundColor: "#363a54",
                    margin: "0",
                    fontSize: "0.7rem",
                  }}
                  startIcon={<SearchIcon style={{ width: 18, margin: 0 }} />}
                >
                  검색
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>사번</TableCell>
              <TableCell>부서</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>직위</TableCell>
              <TableCell>
                <Button
                  className="btns"
                  variant="outlined"
                  style={{
                    margin: "0",
                    fontSize: "0.7rem",
                    // color: "gray"
                  }}
                >
                  선택
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
        </CustomTable>
      </TableContainer>
    </div>
  );
}

export default ModalTableComponent;
