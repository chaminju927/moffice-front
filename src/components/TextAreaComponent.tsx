import React, { useEffect, useState } from "react";
import { dataType } from "./ModalComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function TextAreaComponent({
  content,
  selectedData,
}: {
  content: string;
  selectedData?: dataType;
}): JSX.Element {
  useEffect(() => {
    if (selectedData !== undefined) {
      setTableData([selectedData]);
    }
  }, [selectedData]);

  const [tableData, setTableData] = useState<dataType[]>([]);

  const deleteBtn: () => void = () => {
    setTableData([]);
    console.log(content);
  };

  if (tableData.length > 0) {
    return (
      <div>
        <table className="textArea selectedBox">
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="TableHead selectedNo" >{index + 1}차</td>

              <td colSpan={4} className="selected">
                {data.part} {data.name} {data.grade}
                <IconButton onClick={deleteBtn}>
                  <DeleteIcon sx={{ width: 16, marginRight: 0 }} />
                </IconButton>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <textarea className="textArea" placeholder={content}></textarea>
      </div>
    );
  }
}
export default TextAreaComponent;
