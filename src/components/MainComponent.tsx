import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DateInputComponent from "./DateInputComponent";
import ButtonComponent from "./ButtonComponent";
import React, { useEffect, useState } from "react";
import SelectBoxComponent from "./SelectBoxComponent";
import SearchIcon from "@mui/icons-material/Search";
import RadioBtnComponent from "./RadioBtnComponent";

function MainComponent(): JSX.Element {
  //useEffect(() => {}, []);

  const selectValue = [
    { val: 1, name: "10개씩" },
    { val: 2, name: "20개씩" },
    { val: 3, name: "30개씩" },
  ];

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="header-container">
        <header>
          <div className="floatL">
            <span className="notice">공지</span>
            <span className="ellipsis">
              &nbsp;2023-03-03&nbsp;·&nbsp;제이니스 재택근무 수칙
            </span>
          </div>
        </header>
      </div>

      <form>
        <h2 className="mainH2">출장관리</h2>
        <table className="tableWrap bgBox w100">
          <tr>
            <td>
              <div className="checklist">
                <div className="formRadio">
                  <RadioBtnComponent />
                </div>
              </div>
            </td>
            <td className="txtCenter">
              <div className="dateControl">
                <div className="dateContainer">
                  <DateInputComponent />
                </div>
                &nbsp;~
                <div className="dateContainer">
                  <DateInputComponent />
                </div>
                <ButtonComponent
                  btnName="검색"
                  icon={<SearchIcon sx={{ width: 20 }} />}
                />
              </div>
            </td>
            <td className="txtRight">
              <div
                onClick={() => {
                  window.open(
                    "/new",
                    "new",
                    "scrollbars=yes,resizable=no width=780 height=650, left=500,top=100"
                  );
                }}
              >
                <ButtonComponent btnName="출장신청" />
              </div>
            </td>
          </tr>
        </table>

        <div className="w100" style={{ marginLeft: "10%" }}>
          <div className="tableTop">
            <p>총 0건/ 0페이지</p>
          </div>
          <TableContainer>
            <Table
              className="table horizontal"
              sx={{ minWidth: 650, width: "100%" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>구분</TableCell>
                  <TableCell>유형</TableCell>
                  <TableCell>시작일시</TableCell>
                  <TableCell>종료일시</TableCell>
                  <TableCell>사유</TableCell>
                  <TableCell>등록일시</TableCell>
                  <TableCell>취소일시</TableCell>
                  <TableCell>상태</TableCell>
                  <TableCell>결재</TableCell>
                  <TableCell>관리</TableCell>
                  <TableCell>결재상세</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={11} align="center">
                    조회된 데이터가 없습니다
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="tablePage">
            <div id="paging">
              <SelectBoxComponent selectValue={selectValue} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default MainComponent;
