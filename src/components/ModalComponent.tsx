import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table1Component from "./Table1Component";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function ModalComponent(): JSX.Element {
  //const [modalState, setModalState] = useState<boolean>(true);
  // const modalStyles = {

  // }
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
            <div className="item1">출장명</div>
            <div className="item">
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
            <div className="item">
              <div className="dateControl">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input type="text" placeholder="YYYY.MM.DD" title="시작일" />
                  <CalendarTodayOutlinedIcon
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
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
                            color: "#00c0aa",
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
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ height: "10px" }}>사번</TableCell>
                      <TableCell style={{ height: "10px" }}>부서</TableCell>
                      <TableCell style={{ height: "10px" }}>이름</TableCell>
                      <TableCell style={{ height: "10px" }}>직위</TableCell>
                      <TableCell style={{ height: "10px" }}>선택</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.no}</TableCell>
                        <TableCell align="right">{row.part}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.grade}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">결재자 선택</div>
            <div className="item">
              <textarea>결재자를 선택해주세요.</textarea>
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">참조자 목록</div>
            <div className="item">
              <TableContainer className="subTable">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>이름/사번</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>검색버튼</TableCell>
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
              </TableContainer>
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">참조자 선택</div>
            <div className="item">추가된 데이터가 없습니다.</div>
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
