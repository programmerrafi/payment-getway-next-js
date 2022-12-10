import React from "react";
import { useVarContext } from "../../../Context/createConText";
import { GrClose } from "react-icons/gr";
import YouTubeVideo from "../../Cart/YouTubeVideo";

const PopUp = () => {
  const global = useVarContext();
  console.log(global?.popUp);
  return (
    <div
      className="fixed top-0 w-full h-screen hidden z-[1000] bg-popUpBg"
      style={global?.popUp ? { display: "block" } : null}
      onClick={global?.handleClosePopUp}
    >
      <div className="flex w-full h-full items-center justify-center">
        <div className="video_setting">
          <div className="flex justify-end p-1 cursor-pointer">
            <GrClose
              size={20}
              onClick={global?.handleClosePopUp}
              className="text-navTextColor"
            />
          </div>
          {global?.popUp ? <YouTubeVideo /> : null}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
