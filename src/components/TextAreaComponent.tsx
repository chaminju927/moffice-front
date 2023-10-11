import React, { useEffect, useState } from "react";

function TextAreaComponent({ content }: { content: string }): JSX.Element {
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
