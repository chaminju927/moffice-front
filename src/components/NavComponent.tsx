import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import MonitorIcon from "@mui/icons-material/Monitor";
import ChairIcon from "@mui/icons-material/Chair";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";

function NavComponent(): JSX.Element {
  return (
    <div>
      <nav id="sideBar">
        <h1 className="logo">
          {/* <img src="/resources/img/user/img_logo_mini.png" alt="moffice"></img> */}
        </h1>
        <ul className="lnb">
          <li id="calendar" className="sideBox">
            <CalendarTodayIcon sx={{ marginRight: 3 }} />
            <Typography> 캘린더</Typography>
          </li>
          <li id="vacation" className="sideBox">
            <BeachAccessIcon sx={{ marginRight: 3 }} />
            <Typography>휴가</Typography>
          </li>
          <li id="businessTrip" className="sideBox">
            <FlightTakeoffIcon sx={{ marginRight: 3 }} />
            <Typography>출장</Typography>
          </li>
          <li id="ot" className="sideBox">
            <MoreTimeIcon sx={{ marginRight: 3 }} />
            <Typography>연장근무</Typography>
          </li>
          <li id="pcOnOffView" className="sideBox">
            <MonitorIcon sx={{ marginRight: 3 }} />
            <Typography>근무기록</Typography>
          </li>
          <li id="vacant" className="sideBox">
            <ChairIcon sx={{ marginRight: 3 }} />
            <Typography>자리비움</Typography>
          </li>
          <li id="notice" className="sideBox">
            <AnnouncementIcon sx={{ marginRight: 3 }} />
            <Typography>공지사항</Typography>
          </li>
          <li id="flexible" className="sideBox">
            <HistoryToggleOffIcon sx={{ marginRight: 3 }} />
            <Typography>유연근무</Typography>
          </li>
          <li id="telecommuting" className="sideBox">
            <AddHomeWorkIcon sx={{ marginRight: 3 }} />
            <Typography>재택근무</Typography>
          </li>
          <li id="workState" className="sideBox">
            <GroupsIcon sx={{ marginRight: 3 }} />
            <Typography>부서원 근무 현황</Typography>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavComponent;
