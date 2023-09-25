import React, { useState } from 'react';

function Table2Component() {


  return (
    <div>
      <div class="tableTop">
            <p>총 0건/ 0페이지</p>
        </div>

        <table id="boundary">
          <thead>
            <th>구분</th>
            <th>유형</th>
            <th>시작일시</th>
            <th>종료일시</th>
            <th>사유</th>
            <th>등록일시</th>
            <th>취소일시</th>
            <th>상태</th>
            <th>결재</th>
            <th>관리</th>
            <th>결재상세</th>
          </thead>
          <tbody>
            <tr>
              <td>조회된 데이터가 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <div class="tablePage">
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