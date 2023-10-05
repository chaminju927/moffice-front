import React, { useEffect, useState, ReactNode } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MUITable from "@mui/material/Table";
import ModalTableComponent from "./ModalTableComponent";

function ModalComponent(): JSX.Element {
  useEffect(() => {}, []);

  function createData1(
    no: number,
    part: string,
    name: string,
    grade: string,
    option: string
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
    createData1(20050301, "경영지원팀", "이재준", "대표이사", "선택"),
    createData1(20190201, "제이니스", "박상영", "이사", "선택"),
    createData1(20190502, "제품팀", "이승구", "프로", "선택"),
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
            padding: "8px", // 필요에 따라 조절
            textAlign: "center",
          },
        }}
      >
        {children}
      </MUITable>
    );
  };

  const closeModal: () => void = () => {
    window.open("/");
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
              <select name="encDayoffCode" id="selDaoffType" title="출장명">
                <option value="1">[국내]시스템패치</option>
                <option value="2">[국내]영업활동</option>
                <option value="3">[국내]외부일정</option>
                <option value="4">[국내]정기점검</option>
              </select>
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
                  <input type="text" placeholder="YYYY.MM.DD" title="시작일" />
                  <CalendarTodayOutlinedIcon
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      width: "20",
                    }}
                  />
                </div>
                &nbsp;~
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input type="text" placeholder="YYYY.MM.DD" title="종료일" />
                  <CalendarTodayOutlinedIcon
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      width: "20",
                    }}
                  />
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
              <textarea
                className="textArea"
                placeholder="신청사유를 입력하세요"
              ></textarea>
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
              <textarea
                className="textArea"
                placeholder="결재자를 선택해주세요"
              ></textarea>
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">참조자 목록</div>
            <div className="item">
              <ModalTableComponent />
              {/* <TableContainer className="subTable">
               <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>이름/사번</TableCell>
                      <TableCell colSpan={3}></TableCell>
                      <TableCell>
                        <Button
                          className=" btns"
                          variant="contained"
                          style={{
                            backgroundColor: "#363a54",
                            marginRight: "0",
                            fontSize: "0.5rem",
                          }}
                          startIcon={
                            <SearchIcon style={{ width: 18, margin: 0 }} />
                          }
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
                      <TableCell>선택</TableCell>
                    </TableRow>
                  </TableHead>
                </Table> 
              </TableContainer>*/}
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">참조자 선택</div>
            <div className="item">
              <textarea
                className="textArea"
                placeholder="추가된 데이터가 없습니다."
              ></textarea>
            </div>
          </div>
        </section>

        <div className="popBtnWrap">
          <button className="btns bgBlue apply" onClick={closeModal}>
            신청
          </button>
        </div>
      </form>
    </div>
  );
}
export default ModalComponent;
