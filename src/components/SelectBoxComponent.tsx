import React, { useEffect, useState } from "react";
//import { selectBoxDataType } from "./ModalComponent";

function SelectBoxComponent({
  selectValue,
  getTypeFunction,
}: {
  selectValue: any;
  getTypeFunction?: any;
}) {
  useEffect(() => {
    //getTypeFunction();
  }, []);
  const inputType = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <select id="selectView" onChange={inputType}>
        {selectValue.map((el) => {
          return <option value={el.val}>{el.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectBoxComponent;
