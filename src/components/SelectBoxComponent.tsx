import React, { useEffect, useState } from "react";

function SelectBoxComponent({ selectValue }: { selectValue: any }) {
  useEffect(() => {
    //console.log(props);
  }, []);

  return (
    <div>
      <select id="selectView">
        {selectValue.map((el: { val: number; name: string }) => {
          return <option value={el.val}>{el.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectBoxComponent;
