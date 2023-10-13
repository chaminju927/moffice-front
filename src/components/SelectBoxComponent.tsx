import React, { useEffect, useState } from "react";
//import { selectBoxDataType } from "./ModalComponent";

function SelectBoxComponent({ selectValue }: { selectValue: any }) {
  useEffect(() => {
    //console.log(props);
  }, []);

  return (
    <div>
      <select id="selectView">
        {selectValue.map((el) => {
          return <option value={el.val}>{el.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectBoxComponent;
