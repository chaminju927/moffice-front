import React, { useEffect, useState, ReactNode } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MUITable from "@mui/material/Table";
import ModalTableComponent from "./ModalTableComponent";
import DateInputComponent from "./DateInputComponent";
import ButtonComponent from "./ButtonComponent";
import TextAreaComponent from "./TextAreaComponent";
import SelectBoxComponent from "./SelectBoxComponent";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";

export interface dataType {
  no?: number;
  part: string;
  name: string;
  grade: string;
}
function ModalComponent(): JSX.Element {
  useEffect(() => {
    console.log(rows1);
  }, []);
  const [select, setSelect] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<dataType | null>(null);
  const [selectedData, setSelectedData] = useState<dataType | null>(null);

  function createData(
    no: number,
    part: string,
    name: string,
    grade: string,
    value: number
  ) {
    return {
      no,
      part,
      name,
      grade,
      value,
    };
  }
  const rows1 = [
    createData(20050301, "경영지원팀", "이재준", "대표이사", 0),
    createData(20190201, "제이니스", "박상영", "이사", 1),
    createData(20190502, "제품팀", "이승구", "프로", 2),
  ];
  // const rows2: dataType[] = [
  //   part : rows1.map((row) => (
  //     {row.part}
  //   )),

  // ]

  const selectValue = [
    { val: 1, name: "[국내]시스템패치" },
    { val: 2, name: "[국내]영업활동" },
    { val: 3, name: "[국내]외부일정" },
    { val: 4, name: "[국내]정기점검" },
  ];

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

  const closeModal: (e: React.MouseEvent) => void = () => {
    window.close();
  };

  return (
    <div className="popBackground">
      <form name="frm">
        <div className="popWrap">
          <h4 className="popTit">출장 신청 정보</h4>
        </div>
        <section id="flexTable">
          <div id="tableContainer">
            <div className="item1 item-top">출장명</div>
            <div className="item item-top">
              <SelectBoxComponent selectValue={selectValue} />
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">신청일</div>
            <div className="item dateContainer">
              <div className="dateControl">
                <div className="dateContainer">
                  <DateInputComponent />
                </div>
                ~
                <div className="dateContainer">
                  <DateInputComponent />
                </div>
                <div className="checkAllday dateContainer">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          size="small"
                          sx={{
                            "&.Mui-checked": {
                              color: "#00c0aa",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: 13 }}>종일 일정</Typography>
                      }
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">신청 사유</div>
            <div className="item">
              <TextAreaComponent content="신청사유를 입력하세요" />
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">결재자 목록</div>
            <div className="item">
              <TableContainer className="subTable">
                <CustomTable>
                  <TableHead className="TableHead">
                    <TableRow>
                      <TableCell>사번</TableCell>
                      <TableCell>부서</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>직위</TableCell>
                      <TableCell>선택</TableCell>
                    </TableRow>
                  </TableHead>
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
                            searchTable={() => {
                              const selectedData = rows1[index];
                              setSelectedRowData(selectedData);
                              setSelect(true);
                            }}
                            icon={
                              <CheckIcon sx={{ width: 18, marginRight: 0 }} />
                            }
                            rowNo={index}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </CustomTable>
              </TableContainer>
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">결재자 선택</div>
            <div className="item">
              <div className="selectBox">
                {select ? (
                  <TableHead>
                    {selectedData
                      ? selectedData.map((data, index) => (
                          <TableRow key={data.no}>
                            <TableCell className="TableHead">
                              {index + 1}차
                            </TableCell>
                            <TableCell colSpan={4} className="selected" sx={{}}>
                              {`${data.part} ${data.name} ${data.grade}`}
                            </TableCell>
                          </TableRow>
                        ))
                      : "결재자를 선택해주세요."}
                  </TableHead>
                ) : (
                  <div>
                    <p>결재자를 선택해주세요.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="tableContainer" className="listBox">
            <div className="item1">참조자 목록</div>
            <div className="item">
              <ModalTableComponent rows={rows1} />
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">참조자 선택</div>
            <div className="item">
              <div className="selectBox">
                <p>추가된 데이터가 없습니다</p>
              </div>
            </div>
          </div>
        </section>

        <div className="popBtnWrap" onClick={closeModal}>
          <ButtonComponent
            btnName="신청"
            icon={<CheckIcon sx={{ width: 20, marginRight: 0 }} />}
          />
        </div>
      </form>
    </div>
  );
}
export default ModalComponent;
