import React, { useEffect, useState } from 'react';

function MainComponent() {

const popUp = () => {

}
    
    return (
        <div>
            <h2>출장관리</h2>
            <table>
            <tr>
                <td>
                {/* <div className="checklist">
                    <div className="formRadio">전체</div>
                    <div className="formRadio">정상</div>
                    <div className="formRadio">취소</div>
                </div>
                </td>
                <td className="calender">
                <div className="dateControl">
                    <input type="text">
                    <input type="text">
                </div> */}
                <button>검색</button>
                </td>
                <td>
                <button id="newWindow" onClick={() => popUp()}>출장신청</button>
                </td>
            </tr>
            </table>
        </div>
    );
    
}
export default MainComponent;