import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ModalTableComponent from "./ModalTableComponent";
import DateInputComponent from "./DateInputComponent";
import ButtonComponent from "./ButtonComponent";
import TextAreaComponent from "./TextAreaComponent";
import SelectBoxComponent from "./SelectBoxComponent";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";

export type dataType = {
  no: number;
  part: string;
  name: string;
  grade: string;
};
function ModalComponent(): JSX.Element {
  useEffect(() => {
    //console.log(rows1);
  }, []);
  const [selectedData, setSelectedData] = useState<dataType>();
  const [selectedData2, setSelectedData2] = useState<dataType>();

  const selectValue = [
    { val: 1, name: "[국내]시스템패치" },
    { val: 2, name: "[국내]영업활동" },
    { val: 3, name: "[국내]외부일정" },
    { val: 4, name: "[국내]정기점검" },
  ];

  const closeModal: (e: React.MouseEvent) => void = () => {
    window.close();
  };
  const sendData = (data: dataType) => {
    setSelectedData(data);
  };
  const sendData2 = (data: dataType) => {
    setSelectedData2(data);
  };

  return (
    <div className="popBackground">
      <form name="frm">
        <div className="popWrap">
          <h4 className="popTit">출장 신청 정보</h4>
        </div>
        <section>
          <div id="tableContainer">
            <div className="item1 item-top">
              <p>출장명</p>
            </div>
            <div className="item item-top">
              <SelectBoxComponent selectValue={selectValue} />
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">
              <p>신청일</p>
            </div>
            <div className="item dateContainer">
              <div className="dateControl">
                <div className="dateContainer">
                  <DateInputComponent />
                </div>
                ~
                <div className="dateContainer">
                  <DateInputComponent />
                </div>
                <div className="checkAllday dateContainer">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          size="small"
                          sx={{
                            "&.Mui-checked": {
                              color: "#00c0aa",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: 13 }}>종일 일정</Typography>
                      }
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">
              <p className="infoTag">신청 사유</p>
            </div>
            <div className="item">
              <TextAreaComponent content="신청사유를 입력하세요" />
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">
              <p>결재자 목록</p>
            </div>
            <div className="item">
              <ModalTableComponent
                selectedType="결재자"
                propFunction={sendData}
              />
            </div>
          </div>

          <div id="tableContainer">
            <div className="item1">
              <p>결재자 선택</p>
            </div>
            <div className="item">
              <TextAreaComponent
                content="결재자를 선택해주세요."
                selectedData={selectedData}
              />
            </div>
          </div>
          <div id="tableContainer" className="listBox">
            <div className="item1">
              <p>참조자 목록</p>
            </div>
            <div className="item">
              <ModalTableComponent
                selectedType="참조자"
                propFunction={sendData2}
              />
            </div>
          </div>
          <div id="tableContainer">
            <div className="item1">
              <p>참조자 선택</p>
            </div>
            <div className="item">
              <div className="selectBox">
                <TextAreaComponent
                  content="추가된 데이터가 없습니다."
                  selectedData={selectedData2}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="popBtnWrap" onClick={closeModal}>
          <ButtonComponent
            btnName="신청"
            icon={<CheckIcon sx={{ width: 20, marginRight: 0 }} />}
          />
        </div>
      </form>
    </div>
  );
}
export default ModalComponent;
