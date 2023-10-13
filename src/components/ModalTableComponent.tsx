import React, { ReactNode, useEffect, useState } from "react";
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
          textAlign: "center",
        },
      }}
    >
      {children}
    </MUITable>
  );
};

// function ModalTableComponent({ rows }: { rows: dataType[] }): JSX.Element {
function ModalTableComponent({
  selectedType,
  propFunction,
}: {
  selectedType: string;
  propFunction?: any;
}): JSX.Element {
  const [table, setTable] = useState<boolean>(false);
  const [select, setSelect] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<dataType>();
  useEffect(() => {
    //  console.log(selectedType);
  }, []);

  function createData(
    no: number,
    part: string,
    name: string,
    grade: string
  ): dataType {
    return {
      no,
      part,
      name,
      grade,
    };
  }
  const rows1 = [
    createData(20050301, "경영지원팀", "이재준", "대표이사"),
    createData(20190201, "제이니스", "박상영", "이사"),
    createData(20190502, "제품팀", "이승구", "프로"),
  ];

  return (
    <div>
      <TableContainer className="subTable">
        <CustomTable>
          {selectedType === "참조자" && (
            <TableHead>
              <TableRow>
                <TableCell className="TableHead">이름/사번</TableCell>
                <TableCell colSpan={3}>
                  <input type="text" />
                </TableCell>
                <TableCell>
                  <ButtonComponent
                    searchTable={() => setTable(true)}
                    btnName="검색"
                    icon={<SearchIcon sx={{ width: 20, marginRight: 0 }} />}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableHead className="TableHead">
            <TableRow>
              <TableCell>사번</TableCell>
              <TableCell>부서</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>직위</TableCell>
              <TableCell>선택</TableCell>
            </TableRow>
          </TableHead>

          {selectedType === "결재자" || table ? (
            <TableBody>
              {rows1.map((row, index) => (
                <TableRow key={row.no}>
                  <TableCell>{row.no}</TableCell>
                  <TableCell>{row.part}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.grade}</TableCell>
                  <TableCell>
                    <ButtonComponent
                      btnName="선택"
                      // searchTable={propFunction.bind(null, row)}
                      searchTable={() => {
                         //setSelectedData(row);
                        //console.log(row);
                        propFunction(row);
                        // setSelect(true);
                      }}
                      icon={<CheckIcon sx={{ width: 18, marginRight: 0 }} />}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </CustomTable>
      </TableContainer>
    </div>
  );
}

export default ModalTableComponent;
