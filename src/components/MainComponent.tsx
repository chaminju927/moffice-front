import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioGroup } from "@mui/material";
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

function MainComponent(): JSX.Element {
  const [selectBox, setSelectBox] = useState<string>("");

  useEffect(() => {
    setSelectBox("main");
  }, []);
  const BtnIcon = styled("span")(() => ({
    //radiobtn 클릭 전
    borderRadius: "50%",
    width: 19,
    height: 19,
    display: "inline-block",
    backgroundColor: "#fff",
    fontSize: 10,
  }));

  const CheckedBtn = styled(BtnIcon)({
    borderRadius: "50%",
    backgroundColor: "#00c0aa",
    "&:before": {
      display: "inline-block",
      width: 19,
      height: 19,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    outline: "none",
    boxShadow: "none",
  });

  function RadioBtn(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<CheckedBtn />}
        icon={<BtnIcon />}
        {...props}
      />
    );
  }
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
                  <RadioGroup
                    defaultValue="all"
                    style={{ flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="all"
                      control={<RadioBtn />}
                      label="전체"
                    />
                    <FormControlLabel
                      value="normal"
                      control={<RadioBtn />}
                      label="정상"
                    />
                    <FormControlLabel
                      value="cancel"
                      control={<RadioBtn />}
                      label="취소"
                    />
                  </RadioGroup>
                </div>
              </div>
            </td>
            <td className="txtCenter">
              <div className="dateControl">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <DateInputComponent />
                </div>
                &nbsp;~
                <div style={{ position: "relative", display: "inline-block" }}>
                  <DateInputComponent />
                </div>
                <ButtonComponent />
              </div>
            </td>
            <td className="txtRight">
              <div>
                <button
                  onClick={() => {
                    window.open(
                      "/new",
                      "new",
                      "scrollbars=yes,resizable=no width=780 height=650, left=500,top=100"
                    );
                  }}
                  className="btnRound bgGreen"
                >
                  출장신청
                </button>
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
              <SelectBoxComponent selectValue ={selectValue} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default MainComponent;
