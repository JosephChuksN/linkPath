import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { useAuth } from "../../../Context/AppContext";
import Image from "next/image";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import { v4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import loadingGif from "../../../assets/loading.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

interface Props {
  handleShowModal: () => void;
  showModal: boolean;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}


const EditProfile:FC<Props> = ({ handleShowModal, showModal, loading, setLoading }) => {
  const fileInputRef = useRef <HTMLInputElement>(null);
  const { user, updateUserPhoto, updateUser } = useAuth();
  const [username, setUsername] = useState<string>(user?.name!);
  const [displayName, setDisplayName] = useState<string>(user?.displayName!);
  const [email, setEmail] = useState<string>(user?.email!);
  const [bio, setBio] = useState<string>(user?.bio!);
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string>("");
  const [laodingPhoto, setLoadingPhoto] = useState<boolean>(false);

  //Fn handles photo upload and user update
  const handlePhotoUpload = async () => {
    if (profileImg == null) return; //this returns if no photo to upload

    const fileName = profileImg.name + v4();
    const storageRef = ref(storage, `/images/${fileName}`);
    await uploadBytes(storageRef, profileImg);
    await getDownloadURL(ref(storage, `/images/${fileName}`)).then((url) => {
      updateUserPhoto(url);
    });
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const SelectedFile = e.target.files as FileList
    setProfileImg(SelectedFile?.[0]);
    setPreviewImg(URL.createObjectURL(SelectedFile?.[0]));

    console.log(profileImg);
  };

  const notAvailable = () => {
    toast.info("This feature is not available now", {
      autoClose: 1000,
    });
  };

  const uploadDone = () => {
    toast.success("Photo upload success", {
      autoClose: 1000,
    });
  };
  const editDone = () => {
    toast.success("Update success", {
      autoClose: 1000,
    });
  };

  //handles photo upload save
  const uploadPhoto = async () => {
    if (profileImg === null) {
      fileInputRef.current!.click();
    } else {
      setLoadingPhoto(true);
      await handlePhotoUpload();
      setLoadingPhoto(false);
      uploadDone();
      setProfileImg(null);
    }
  };

  const handleImgCancel = () => {
    setProfileImg(null);
    setPreviewImg("");
  };

  const handleUpdateCancel = () => {
    setUsername(user?.displayName!);
    setBio(user?.bio!);
    handleShowModal();
    
  };

  //handles user bio and dsiplay name update
  const handleUserUpdate = async () => {
    handleShowModal();
    setLoading(true);
    await updateUser(displayName, bio);
    setLoading(false);
    editDone();
  };

  return (
    <div className="flex flex-col pb-5 w-full  lg:w-[55%]  items-center gap-3 border rounded-lg relative">
      <span className="w-full text-cyan-600 font-semibold text-xl px-3 pt-3 ">
        Edit Your Profile
      </span>
      <div className="flex lg:flex-row flex-col items-start   gap-4 p-3 w-full">
        <div className="flex flex-col items-center  w-full lg:w-2/5 relative">
          <span className="w-full items-center text-center font-medium mb-1">
            Profile Photo
          </span>
          <span
            className={`${
              !user?.profileImg || !previewImg ? "bg-cyan-600/20" : null
            } w-28  h-28 lg:w-full lg:h-44  rounded-md flex items-center bg-no-repeat text-white cursor-pointer  bg-cover capitalize justify-center font-bold text-5xl`}
            style={{ backgroundImage: `url(${previewImg || user?.profileImg})` }}
          >
            {!user?.profileImg && !previewImg ? user?.name?.charAt(0) : null}
          </span>
          <div className="flex flex-col mt-3 gap-1 w-2/5 lg:w-full ">
            <button
              className="transition-all duration-100 delay-75 ease-in-out hover:bg-slate-100 cursor-pointer py-1 border rounded-md font-semibold "
              onClick={uploadPhoto}
              type="button"
            >
              {profileImg === null ? (
                <span>Upload Photo</span>
              ) : (
                <span>Save Photo</span>
              )}
            </button>
            <button
              className="transition-all duration-100 delay-75 ease-in-out hover:underline text-cyan-600 cursor-pointer py-1 "
              type="button"
            >
              {!profileImg ? (
                <span>Remove Photo</span>
              ) : (
                <span onClick={handleImgCancel}>Cancel</span>
              )}
            </button>
          </div>
          {laodingPhoto ? (
            <div className="flex w-full h-full top-0 z-20 flex-wrap items-center gap-2 justify-center absolute">
              <span className="w-3/5 md:w-2/5 lg:w-3/5 flex flex-col justify-center items-center md:p-5 p-8">
                <Image
                  src={loadingGif}
                  width={30}
                  height={30}
                  alt="loading"
                />
              </span>
            </div>
          ) : null}
        </div>
        <div className="lg:w-3/5 flex flex-col gap-3">
          <input
            ref={fileInputRef}
            className="hidden"
            type="file"
            accept="image/*"
            name="profileImg"
            onChange={handleImgChange}
          />
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium" htmlFor="">
              Username
            </label>
            <input
              className="w-full lowercase   outline-none  focus:ring-0 rounded-md bg-slate-100"
              type="text"
              value={username}
              name="name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              readOnly={true}
              onClick={notAvailable}
            />
            <span className="absolute top-10 right-3 text-sm">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium" htmlFor="">
              Email Address
            </label>
            <input
              className="w-full lowercase outline-none bg-slate-100 focus:ring-0 rounded-l-xl md:rounded-md"
              type="text"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              readOnly={true}
              onClick={notAvailable}
            />
            <span className="absolute top-10 right-3 text-sm">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium" htmlFor="">
              Display Name
            </label>
            <input
              className="w-full outline-none  focus:ring-0  rounded-md "
              type="text"
              value={displayName}
              name="name"
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
            />
            <p className="text-xs text-slate-500">
              This could be your fullname, or a nickname — however you’d like
              people to refer to you on LinkPath and if available will be
              displayed in place of your username.
            </p>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium" htmlFor="">
              Bio
            </label>
            <input
              className="w-full outline-none  focus:ring-0 rounded-md"
              placeholder="Description"
              type="text"
              value={bio}
              name="description"
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 justify-end px-3  w-full">
        <button className="py-1 px-2 rounded bg-slate-300 font-medium text-white">
          Cancel
        </button>
        <button
          onClick={handleShowModal}
          type="button"
          className="py-1 px-2 rounded bg-cyan-600 font-medium text-white"
        >
          Save Changes
        </button>
      </div>
      {showModal ? (
        <div
          onClick={handleShowModal}
          className="flex w-full h-full top-0 z-20 bg-cyan-600/10 flex-wrap items-center gap-2 justify-center absolute"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-4/5 md:w-2/5 lg:w-3/5 bg-white flex flex-col gap-6 md:gap-4 justify-center items-center md:p-5 p-8 rounded-lg shadow-lg border"
          >
            <span className="text-cyan-600 text-xl flex flex-col items-center">
              <span>Update Profile</span>
              <span className="text-sm text-gray-500 text-center">
                Are you sure you want to save this changes
              </span>
            </span>
            <span className="flex gap-3 w-full items-center justify-center">
              <button
                onClick={handleUpdateCancel}
                className="hover:bg-gray-600/60 bg-gray-300 text-white py-1 px-2 rounded-md transition-all duration-200 delay-200"
              >
                Cancel
              </button>
              <button
                onClick={handleUserUpdate}
                type="button"
                className="hover:bg-cyan-600/60 bg-cyan-600 text-white py-1 px-2 rounded-md transition-all duration-200 delay-200"
              >
                Save
              </button>
            </span>
          </div>
        </div>
      ) : null}

      {loading ? (
        <div className="flex w-full h-full bg-cyan-600/10 top-0 z-20 flex-wrap items-center gap-2 justify-center absolute">
          <span className="w-3/5 md:w-2/5 lg:w-3/5 flex flex-col justify-center items-center md:p-5 p-8">
            <Image 
            src={loadingGif} 
            width={30}
            height={30}
            alt="loading" />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default EditProfile;
