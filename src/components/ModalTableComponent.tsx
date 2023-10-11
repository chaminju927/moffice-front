import React, { ReactNode, useState } from "react";
import MUITable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "./ButtonComponent";
import { TableBody } from "@mui/material";
import { dataType } from "./ModalComponent";
import CheckIcon from "@mui/icons-material/Check";

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
          padding: "auto",
          //padding: "8px",
          textAlign: "center",
        },
      }}
    >
      {children}
    </MUITable>
  );
};

function ModalTableComponent({ rows }: { rows: dataType[] }): JSX.Element {
  //const [data, setData] = useState([]);
  const [table, setTable] = useState<boolean>(false);

  return (
    <div>
      <TableContainer className="subTable">
        <CustomTable>
          <TableHead>
            <TableRow>
              <TableCell className="TableHead">이름/사번</TableCell>
              <TableCell colSpan={3}>
                <input type="text" />
              </TableCell>
              <TableCell>
                <ButtonComponent
                  showTable={() => setTable(true)}
                  btnName="검색"
                  icon={<SearchIcon sx={{ width: 20, marginRight: 0 }} />}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>사번</TableCell>
              <TableCell>부서</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>직위</TableCell>
              <TableCell>선택</TableCell>
            </TableRow>
          </TableHead>
          {table && (
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.no}>
                  <TableCell>{row.no}</TableCell>
                  <TableCell>{row.part}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.grade}</TableCell>
                  <TableCell>
                    <ButtonComponent btnName="선택" icon={<CheckIcon />} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </CustomTable>
      </TableContainer>
    </div>
  );
}

export default ModalTableComponent;
