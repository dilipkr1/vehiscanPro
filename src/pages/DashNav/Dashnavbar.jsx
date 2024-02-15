import "./dashnavbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Dashnavbar = () => {
  return (
    <div className="bg-logoClr dashNav flex items-center text-sm font-normal  overflow-hidden border-none">
      <div className="wrapper w-full p-0 flex items-center justify-end">
         
        <div className="items flex items-center">
          <div className="item flex items-center mr-5 relative  ">
            <NotificationsNoneOutlinedIcon className="icon iconClr" />
            <div className="counter w-3 h-3   text-main flex font-bold items-center justify-center ">
              1
            </div>
          </div>
          <div className="item flex items-center mr-5 relative  ">
            <ChatBubbleOutlineOutlinedIcon className="icon  iconClr" />
            <div className="counter counter w-3 h-3   text-main flex font-bold items-center justify-center ">
              2
            </div>
          </div>

          <div className="item flex items-center mr-5 relative ">
            <img
              src="https://vehiclean.in/wp-content/uploads/2023/02/vehiclean-hd-logo.png"
              alt=""
              className="w-8 h-8 border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashnavbar;
