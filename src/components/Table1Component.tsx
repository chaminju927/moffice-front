import { useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RadioGroup } from '@mui/material';
//import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ModalComponent from './ModalComponent';


function Table1Component(): JSX.Element  {
  const [ isModalOpen, setIsModalOpen ] = React.useState<boolean>(false);

  const openModal  = () => {
    setIsModalOpen(true);
    return (
      <ModalComponent />
    );
  }
  //const closeModal = () => setIsModalOpen(false);

  //const openWindow = () => {
    
  //   const newWindow = window.open('/new', '_blank');
  //   if (newWindow) {
  //     newWindow.document.write('<div id="modal-root"></div>');
      
  //     return <ModalComponent />
  //   }
  // }
  const BtnIcon = styled('span')(() => ({  //radiobtn 클릭 전
    borderRadius: '50%',
    width: 19,
    height: 19,
    display: 'inline-block',
    backgroundColor: '#fff'
  }));

  const CheckedBtn = styled(BtnIcon)({
    borderRadius: '50%',
    backgroundColor: '#00c0aa',
    '&:before': {
      display: 'inline-block',
      width: 19,
      height: 19,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    outline: 'none', // 포커스 스타일 무효화
    boxShadow: 'none', // 그림자 스타일 무효화
  });

  function RadioBtn(props: RadioProps) {
    return (
      <Radio
      disableRipple
      color="default"
      checkedIcon={<CheckedBtn />}
      //  icon={<BpIcon />}
      {...props}
    />
    );
  }

  const searchIcon = () => {
    return(
      <SearchIcon />
    )
  }

  return (
    <div>
      <h2>출장관리</h2>
        <table className='tableWrap bgBox w100'>
            <tr>
            <td>
                <div className="checklist" >
                  <div className="formRadio">
                    <RadioGroup defaultValue="all" style={{ flexDirection: 'row' }}>
                      <FormControlLabel value="all" control={<RadioBtn />} label="전체" />
                      <FormControlLabel value="normal" control={<RadioBtn />} label="정상" />
                      <FormControlLabel value="cancel" control={<RadioBtn />} label="취소" />
                    </RadioGroup>
                  </div>
                </div>
            </td>
            <td className="txtCenter">
                <div className="dateControl">
                <input type="text" placeholder="YYYY.MM.DD" title="시작일" /> ~ 
                <input type="text" placeholder="YYYY.MM.DD" title="종료일"/>
                <button className="btns bgBlue search">검색</button>
                </div>
            </td>
            <td className="txtRight">
              <div>
                <button onClick={openModal} className="btnRound bgGreen" >출장신청</button>
              </div>
            </td>
            </tr>
        </table>
        
      </div>
  );
}
export default Table1Component;
