import React, { useEffect, useState } from "react";
import { dataType } from "./ModalComponent";

function TextAreaComponent({
  content,
  selectedData,
}: {
  content?: string;
  selectedData?: dataType[];
}): JSX.Element {
  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);
  //const [tableData, setTableData] = useState(selectedData);

  return selectedData ? (
    <div>
      <table>
        {selectedData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}차</td>
            <td>{data.part}</td>
            <td>{data.name}</td>
            <td>{data.grade}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : (
    <div>
      <textarea className="textArea" placeholder={content}></textarea>
    </div>
  );
}
export default TextAreaComponent;
