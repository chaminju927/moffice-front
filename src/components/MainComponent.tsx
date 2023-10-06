import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroup } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function MainComponent(): JSX.Element {
  // const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

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
                  <input
                    type="text"
                    placeholder="2023-10-05"
                    title="시작일"
                    style={{
                      width: "140px",
                      paddingRight: "30px",
                    }}
                  />
                  <CalendarTodayOutlinedIcon
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      width: "20",
                    }}
                  />
                </div>
                &nbsp;&nbsp;~
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input
                    type="text"
                    placeholder="2024-01-03"
                    title="종료일"
                    style={{
                      width: "140px",
                    }}
                  />
                  <CalendarTodayOutlinedIcon
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      width: "20",
                    }}
                  />
                </div>
                <Button
                  className="bgBlue btns"
                  variant="contained"
                  style={{ backgroundColor: "#363a54" }}
                  startIcon={<SearchIcon style={{ width: 20 }} />}
                >
                  검색
                </Button>
                {/* <button className="btns bgBlue search">검색</button> */}
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
              <select id="selectView">
                <option value="10">10개씩</option>
                <option value="20">20개씩</option>
                <option value="30">30개씩</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default MainComponent;
