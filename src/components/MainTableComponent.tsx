import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { applyDataType } from "src/types/common";

function MainTableComponent({
  renderState,
  searchedData,
}: {
  renderState: boolean;
  searchedData: applyDataType[];
}): JSX.Element {
  return (
    <div>
      <div>
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
                <TableCell colSpan={7}>조회된 데이터가 없습니다.</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}
export default MainTableComponent;
