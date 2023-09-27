import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroup } from "@mui/material";
//import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Table1Component(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const BtnIcon = styled("span")(() => ({
    //radiobtn 클릭 전
    borderRadius: "50%",
    width: 19,
    height: 19,
    display: "inline-block",
    backgroundColor: "#fff",
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

  const searchIcon = () => {
    return <SearchIcon />;
  };
  return (
    <div>
      <header id="notice">
        <div className="floatL">
          <span>공지</span>
          <span>2023-03-03 제이니스 근무 수칙</span>
        </div>
        <div className="floatR"></div>

        {/* <ul className="floatR">
          <li>
            <h2>제이니스</h2>
          </li>
          <li></li>
        </ul> */}
      </header>

      <h2>출장관리</h2>
      <table className="tableWrap bgBox w100">
        <tr>
          <td>
            <div className="checklist">
              <div className="formRadio">
                <RadioGroup defaultValue="all" style={{ flexDirection: "row" }}>
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
              <input type="text" placeholder="YYYY.MM.DD" title="시작일" /> ~
              <input type="text" placeholder="YYYY.MM.DD" title="종료일" />
              <button className="btns bgBlue search">검색</button>
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

      <div className="tableTop">
        <p>총 0건/ 0페이지</p>
      </div>
      <div className="w100" style={{ marginLeft: "10%" }}>
        <TableContainer>
          <Table
            className="table horizontal"
            sx={{ minWidth: 650, width: "100%" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>구분</TableCell>
                <TableCell align="right">유형</TableCell>
                <TableCell align="right">시작일시</TableCell>
                <TableCell align="right">종료일시</TableCell>
                <TableCell align="right">사유</TableCell>
                <TableCell align="right">등록일시</TableCell>
                <TableCell align="right">취소일시</TableCell>
                <TableCell align="right">상태</TableCell>
                <TableCell align="right">결재</TableCell>
                <TableCell align="right">관리</TableCell>
                <TableCell align="right">결재상세</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={11}> 조회된 데이터가 없습니다</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="tablePage">
        <div id="paging">
          <select id="selectView">
            <option value="10">10개씩</option>
            <option value="20">20개씩</option>
            <option value="30">30개씩</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Table1Component;
