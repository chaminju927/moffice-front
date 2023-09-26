import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Table2Component(): JSX.Element {


  return (
    <div>
      <div className="tableTop">
          <p>총 0건/ 0페이지</p>
      </div>
      <div className='w100' style={{marginLeft: '10%'}}>
        <TableContainer>
          <Table  className="table" sx={{ minWidth: 650, width: '100%' }}>
            <TableHead>
                <TableRow >
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
                  <TableCell colSpan={11} placeholder='조회된 데이터가 없습니다'></TableCell>
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
export default Table2Component;