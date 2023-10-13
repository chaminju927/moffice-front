import React, { useEffect, useState } from "react";
import { dataType } from "./ModalComponent";

function TextAreaComponent({
  content,
  clickedData,
}: {
  content?: string;
  clickedData?: dataType;
}): JSX.Element {
  useEffect(() => {
    //console.log({ content });
  }, []);

  return (
    <div>
      <textarea className="textArea" placeholder={content}></textarea>
    </div>
  );
}
export default TextAreaComponent;
