import React, { useState } from 'react';

function Table1Component() {

  const popupBtn = () => {
    //window.open();
  }

  return (
    <div>
      <h2>출장관리</h2>
        <table id="boundary">
            <tr>
            <td>
                <div className="checklist" id="boundary">
                <div className="formRadio">전체</div>
                <div className="formRadio">정상</div>
                <div className="formRadio">취소</div>
                </div>
            </td>
            <td className="calender">
                <div className="dateControl">
                <input type="text" />-
                <input type="text" />
                <button>검색</button>
                </div>
            </td>
            <td>
                <button id="newWindow" onClick={popupBtn} >출장신청</button>
            </td>
            </tr>
        </table>
        
      </div>
  );
}

export default Table1Component;
