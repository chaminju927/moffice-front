import React, { useEffect, useState } from 'react';

function ModalComponent({  }) : JSX.Element {
    const [ modalState, setModalState ] = useState<boolean>(true);
    // const modalStyles = {

    // }

    useEffect(() => {
        // for(let i = 0;i < 15; i ++){
        //     const divBox = document.createElement('div');
        //     const modalTable = document.getElementById('#flexTable');
        //     modalTable.appendChild(divBox);
        // }
    }, []);

    const closeModal = () => {
        setModalState(false);
    }

    return (
        // <div style={{ display: isOpen ? "block" : "none" }}>
        <div>
            <form name="frm">
              <h4>출장 신청 정보</h4>

              <section id='flexTable'>
                <div id="tableContainer">
                    <div className='item'>출장명</div>
                    <div className='item'>
                        <select name="encDayoffCode" id="selDaoffType" title="출장명">
                            <option value="1">[국내]시스템패치</option>
                            <option value="2">[국내]영업활동</option>
                            <option value="3">[국내]외부일정</option>
                            <option value="4">[국내]정기점검</option>
                        </select>
                    </div>
                </div>

                <div id="container">
                    <div className='item1'>신청일</div>
                    <div className='item dateControl'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div className='item'>
                        <input type="checkbox" name="is_allday" />
                        <label htmlFor="is_allday">"종일 일정"</label>
                    </div>
                </div>
                <div id="container">
                    <div className='item1'>신청 사유</div>
                    <div className='item'>
                        <textarea name="" id="" placeholder='신청사유를 입력하세요'></textarea>
                    </div>
                </div>
                <div id="container">
                    <div className='item1'>결재자 목록</div>
                    <div className='item'> {/* 중첩 테이블 */} </div>   
                </div>
                <div id="container">
                    결재자 선택

                </div>
                <div id="container"></div>
                <div id="container">참조자 목록</div>
                
              </section>            



              <div className='popBtnWrap'>
                <button onClick={closeModal}>Close</button>
              </div>

            </form>
      </div>
    );
}
export default ModalComponent;