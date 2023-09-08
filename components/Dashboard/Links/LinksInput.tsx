import { FC, useState, useRef, useEffect, ChangeEvent, Dispatch, SetStateAction, RefObject } from "react";
import Image from "next/image";
import AddLinkImg from "./AddLinkImg";
import { useAuth } from "@Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faCamera } from "@fortawesome/free-solid-svg-icons";
import loadingGif from "@assets/loading.gif";

interface Props {
  id: string;
  handleImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleShowDeleteModal: () => void;
  previewImg: string;
  showAddImg: boolean;
  setShowAddImg: Dispatch<SetStateAction<boolean>>;
  siteName: string;
  siteLink: string;
  setSiteName: Dispatch<SetStateAction<string>>;
  setSiteLink: Dispatch<SetStateAction<string>>;
  linkImg: string;
  loading: boolean;
  imgInputRef: RefObject<HTMLInputElement>;
}

const LinkInput:FC<Props> = ({
  id,
  handleImgChange,
  handleShowDeleteModal,
  previewImg,
  showAddImg,
  setShowAddImg,
  siteName,
  siteLink,
  setSiteName,
  setSiteLink,
  linkImg,
  loading,
  imgInputRef,
}) => {
  const [siteNameFocus, setSiteNameFocus] = useState<boolean>(false);
  const [siteLinkFocus, setSiteLinkFocus] = useState<boolean>(false);
  const siteImg: string = `https://${new URL(siteLink).hostname}/favicon.ico`;
  const siteNameInputRef = useRef<HTMLInputElement>(null);
  const siteLinkInputRef = useRef<HTMLInputElement>(null);
  const { editLinks } = useAuth();

  //triggers image file input
  const handleInputFileClick = () => {
    imgInputRef.current!.click();
  };

  useEffect(() => {
    const editData = () => {
      editLinks(id, siteLink, siteName);
    };
    return editData;
  }, [siteName, siteLink, id]);

  return (
    <div
      key={id}
      className="flex items-center shadow-lg shadow-cyan-600/10 border w-full rounded-2xl md:w-[80%] p-3 md:p-5 gap-3 justify-between relative"
    >
      <div className="flex md:gap-10 gap-2">
        <span
          onClick={() => {
            setShowAddImg(true);
          }}
          className="w-16 h-16 rounded bg-gray-200 flex items-center justify-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${previewImg || linkImg})` }}
        >
          <span className="text-black/60 relative flex items-center">
            <FontAwesomeIcon icon={faCamera} />
            <span
              className={`${
                !loading ? "hidden" : ""
              } absolute w-full flex items-center `}
            >
              <Image  
              src={loadingGif} 
              width={20}
              height={20}
              alt="loading" />
            </span>
          </span>
        </span>
        <form encType="multipart/form-data" className="flex flex-col gap-3">
          <div className="flex gap-5 items-center relative">
            <input
              ref={imgInputRef}
              className="hidden"
              type="file"
              accept="image/*"
              name="profileImg"
              onChange={handleImgChange}
            />
            <input
              ref={siteNameInputRef}
              className="md:text-base text-sm font-medium  focus:border-none focus:ring-0  outline-none capitalize"
              value={siteName}
              name="siteName"
              id={id}
              onChange={(e) => {
                setSiteName(e.target.value);
              }}
              onFocus={() => setSiteNameFocus(true)}
              onBlur={() => {
                setSiteNameFocus(false);
              }}
            />
            <span
              className={`${
                siteNameFocus ? "hidden" : ""
              } text-slate-300  text-[0.8rem] `}
              onClick={() => {
                siteNameInputRef.current!.focus();
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${siteImg})` }}
            ></span>
            <div>
              <input
                ref={siteLinkInputRef}
                className="text-purple-500 md:text-base text-xs truncate font-medium focus:border-none focus:ring-0  outline-none"
                value={siteLink}
                name="siteLink"
                id={id}
                onChange={(e) => {
                  setSiteLink(e.target.value);
                }}
                onFocus={() => setSiteLinkFocus(true)}
                onBlur={() => {
                  setSiteLinkFocus(false);
                }}
              />
              <span
                className={`${
                  siteLinkFocus ? "hidden" : ""
                } text-slate-300 text-[0.8rem] `}
                onClick={() => {
                  siteLinkInputRef.current!.focus();
                }}
              >
                <FontAwesomeIcon icon={faPen} />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="h-full">
        <span
          className="transition-all duration-200 delay-75 ease-in-out hover:text-red-600 text-slate-300 z-10"
          onClick={handleShowDeleteModal}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
      <AddLinkImg
        handleInputFileClick={handleInputFileClick}
        showAddImg={showAddImg}
        setShowAddImg={setShowAddImg}
      />
    </div>
  );
};

export default LinkInput;
