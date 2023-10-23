import { useEffect, useState } from "react";
import DateInputComponent from "./DateInputComponent";
import ButtonComponent from "./ButtonComponent";
import SelectBoxComponent from "./SelectBoxComponent";
import SearchIcon from "@mui/icons-material/Search";
import RadioBtnComponent from "./RadioBtnComponent";
import NavComponent from "./NavComponent";
import axios from "axios";
import { applyDataType } from "src/types/common";
import MainTableComponent from "./MainTableComponent";

function MainComponent(): JSX.Element {
  //메인페이지 검색 후 가져온 데이터
  const [searchedData, setSearchedData] = useState<applyDataType[]>([]);

  const [dateState1, setDateState1] = useState<string>();
  const [dateState2, setDateState2] = useState<string>();
  const [renderState, setRenderState] = useState<boolean>(false);

  useEffect(() => {
    console.log(searchedData);
  }, [searchedData]);

  const searchWorkType = () => {
    axios
      .get("http://localhost:8080/worktrip/list", {
        params: {
          startDate: dateState1,
          endDate: dateState2,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSearchedData([...searchedData, response.data]);
        setRenderState(true);
      })
      .then((error) => {
        console.log(error);
      });
    console.log("clicked");
  };
  const getDate1 = (dateValue: string) => {
    setDateState1(dateValue);
  };
  const getDate2 = (dateValue: string) => {
    setDateState2(dateValue);
    console.log(dateState1);
    console.log(dateState2);
  };

  const selectValue = [
    { val: 1, name: "10개씩" },
    { val: 2, name: "20개씩" },
    { val: 3, name: "30개씩" },
  ];
  return (
    <div>
      <NavComponent />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="header-container">
          <header>
            <div className="floatL">
              <span className="notice">공지</span>
              <span>&nbsp;2023-03-03&nbsp;·&nbsp;제이니스 재택근무 수칙</span>
            </div>
          </header>
        </div>

        <form className="mainForm">
          <h2 className="mainH2">출장관리</h2>
          <table className="tableWrap bgBox">
            <tr>
              <td>
                <div className="formRadio">
                  <RadioBtnComponent />
                </div>
              </td>
              <td>
                <div className="dateControl">
                  <div>
                    <DateInputComponent getStartDate={getDate1} />
                  </div>
                  &nbsp;~
                  <div>
                    <DateInputComponent getEndDate={getDate2} />
                  </div>
                  <ButtonComponent
                    btnName="검색"
                    icon={<SearchIcon sx={{ width: 20 }} />}
                    search={searchWorkType}
                  />
                </div>
              </td>
              <td>
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

          <div className="mainTable">
            <MainTableComponent
              renderState={renderState}
              searchedData={searchedData}
            />
            {/* <div>
              <p>총 0건/ 0페이지</p>
            </div>
            <TableContainer>
              <Table className="table horizontal">
                <TableHead>
                  <TableRow>
                    <TableCell>유형</TableCell>
                    <TableCell>시작일시</TableCell>
                    <TableCell>종료일시</TableCell>
                    <TableCell>사유</TableCell>
                    <TableCell>등록일시</TableCell>
                    <TableCell>결재</TableCell>
                    <TableCell>결재상세</TableCell>
                  </TableRow>
                </TableHead>
                {renderState ? (
                  <TableBody>
                    {searchedData.map((row) => (
                      <TableRow key={row.no}>
                        <TableCell>{row.workType}</TableCell>
                        <TableCell>{row.startDate}</TableCell>
                        <TableCell>{row.endDate}</TableCell>
                        <TableCell>{row.reason}</TableCell>
                        <TableCell>{row.enrollDate}</TableCell>
                        <TableCell>{row.confirm}</TableCell>
                        <TableCell>{row.workerNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={7}>
                        조회된 데이터가 없습니다.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer> */}

            <div className="tablePage">
              <SelectBoxComponent selectValue={selectValue} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default MainComponent;
