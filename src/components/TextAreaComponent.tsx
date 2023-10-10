
import React, { useEffect, useState } from 'react';


function TextAreaComponent(props): JSX.Element {

    const [data, setData] = useState({ 
     
    });
   

  return (
    <div>
      <textarea
        className="textArea"
        placeholder="신청사유를 입력하세요"
      ></textarea>
    </div>
  );
}
export default TextAreaComponent;
