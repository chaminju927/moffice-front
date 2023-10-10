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

interface dataType {
  no: number;
  part: string;
  name: string;
  grade: string;
  option: string | null;
}
function ModalComponent(): JSX.Element {
  //const [data, setData] = useState<dataType[]>([
  // no: 0,
  // part: '',
  // name: '',
  // grade: '',
  // option: null,
  // ]);
  useEffect(() => {}, []);
  //테이블 렌더링 부분 리팩토링/ props넘겨주는 부분 수정
  function createData1(
    no: number,
    part: string,
    name: string,
    grade: string,
    option: string | null
  ) {
    return {
      no,
      part,
      name,
      grade,
      option,
    };
  }
  const rows1 = [
    createData1(20050301, "경영지원팀", "이재준", "대표이사", ""),
    createData1(20190201, "제이니스", "박상영", "이사", ""),
    createData1(20190502, "제품팀", "이승구", "프로", ""),
  ];

  const selectValue = [
    { val: 1, name: "[국내]시스템패치" },
    { val: 2, name: "[국내]영업활동" },
    { val: 3, name: "[국내]외부일정" },
    { val: 4, name: "[국내]정기점검"}
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
            <div
              className="item"
              style={{ position: "relative", display: "inline-block" }}
            >
              <div className="dateControl">
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <DateInputComponent />
                </div>
                &nbsp;~
                <div style={{ position: "relative", display: "inline-block" }}>
                  <DateInputComponent />
                </div>
                <div
                  style={{ position: "relative", display: "inline-block" }}
                  className="checkAllday"
                >
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
                      label="종일 일정"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">신청 사유</div>
            <div className="item">
              <TextAreaComponent />
              {/* <textarea
                className="textArea"
                placeholder="신청사유를 입력하세요"
              ></textarea> */}
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">결재자 목록</div>
            <div className="item">
              <TableContainer className="subTable">
                <CustomTable>
                  <TableHead>
                    <TableRow>
                      <TableCell>사번</TableCell>
                      <TableCell>부서</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>직위</TableCell>
                      <TableCell>선택</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row) => (
                      <TableRow key={row.no}>
                        <TableCell>{row.no}</TableCell>
                        <TableCell align="right">{row.part}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.grade}</TableCell>
                        <TableCell align="right">{row.option}</TableCell>
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
              <TextAreaComponent />
              {/* <textarea
                className="textArea"
                placeholder="결재자를 선택해주세요"
              ></textarea> */}
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">참조자 목록</div>
            <div className="item">
              <ModalTableComponent {...rows1} />
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">참조자 선택</div>
            <div className="item">
              <TextAreaComponent />
              {/* <textarea
                className="textArea"
                placeholder="추가된 데이터가 없습니다."
              ></textarea> */}
            </div>
          </div>
        </section>

        <div className="popBtnWrap" onClick={closeModal}>
          {/* <button className="btns bgBlue apply" onClick={closeModal}>
            신청
          </button> */}
          <ButtonComponent />
        </div>
      </form>
    </div>
  );
}
export default ModalComponent;
