// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faTrashCan,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, FC } from "react";

interface Props {
  handleInputFileClick: () => void;
  showAddImg: boolean;
  setShowAddImg: Dispatch<SetStateAction<boolean>>;
}

const AddLinkImg:FC<Props> = ({ handleInputFileClick, showAddImg, setShowAddImg }) => {
  return (
    <div
      className={`${
        !showAddImg ? "hidden" : ""
      } flex items-center flex-col gap-1 py-2 px-3 w-64 absolute bg-white border top-10 left-0 z-20 md:-left-40 rounded-md`}
    >
      <span
        className="text-md text-red-500 w-full text-right "
        onClick={() => setShowAddImg(!showAddImg)}
      >
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className="transition-all ease-in-out duration-150 hover:scale-125 cursor-pointer"
        />
      </span>
      <span className="w-full font-semibold text-md">
        Update this link's thumbmail
      </span>
      <div className="flex flex-col items-center w-full gap-1 py-1 ">
        <span
          className="p-1 flex items-center gap-3 w-full cursor-pointer rounded-md transition-all duration-100 delay-75 ease-in-out hover:bg-gray-300/20"
          onClick={() => handleInputFileClick()}
        >
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-200 text-xs">
            <FontAwesomeIcon icon={faUpload} />
          </span>
          <span>Upload Photo</span>
        </span>
        <span
          className="p-1 flex items-center gap-3 cursor-pointer w-full rounded-md transition-all duration-100 delay-75 ease-in-out hover:bg-gray-300/20"
          onClick={() => setShowAddImg(!showAddImg)}
        >
          <span className="w-7 h-7 rounded-full flex items-center justify-center  bg-gray-200 text-xs">
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
          <span>Remove Photo</span>
        </span>
      </div>
    </div>
  );
};

export default AddLinkImg;
