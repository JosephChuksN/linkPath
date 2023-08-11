import  { useRef } from 'react'
import loadingGif from '../../../assets/loading.gif'

const EditProfile = ({
    profileImg, 
    previewImg,  
    firsChar, 
    handleImgChange,
    username,
    setusername,
    bio,
    setBio,
    handleShowModal,
    showModal,
    handleUserUpdate,
    loading
}) => {

    const fileInputRef = useRef()


  return (
    <div  className='flex flex-col pb-5 w-full  lg:w-[55%]  items-center gap-3 border rounded-lg relative'>
      <span className='w-full text-cyan-600 font-semibold text-xl px-3 pt-3 '>Edit Your Profile</span>
      <div  className='flex lg:flex-row flex-col items-start   gap-4 p-3 w-full'>
         <div className='flex flex-col items-center  w-full lg:w-2/5'>
              <span className='w-full items-center text-center font-medium mb-1'>Profile Photo</span>
              <span  className={`${!profileImg || !previewImg ? "bg-cyan-600/20" : null} w-28  h-28 lg:w-full lg:h-44  rounded-md flex items-center bg-no-repeat text-white cursor-pointer  bg-cover capitalize justify-center font-bold text-5xl`}
              style={{backgroundImage: `url(${previewImg || profileImg})`}}>
                {!profileImg && !previewImg ? firsChar : null}
              </span>
             <div className='flex flex-col mt-3 gap-1 w-2/5 lg:w-full '>
             <button 
              className='transition-all duration-100 delay-75 ease-in-out hover:bg-slate-100 cursor-pointer py-1 border rounded-md font-semibold '
              onClick={()=>{fileInputRef.current.click()}} 
              type='button'
              >
                Upload Photo
              </button>
              <button 
              className='transition-all duration-100 delay-75 ease-in-out hover:underline text-cyan-600 cursor-pointer py-1 ' 
              type='button'
              >
                Remove Photo
              </button>
             </div>
              
         </div>
          <div className='lg:w-3/5 flex flex-col gap-3'>
          <input 
              ref={fileInputRef} 
              className='hidden' 
              type="file" 
              accept="image/*" 
              name="profileImg"
              onChange={handleImgChange} 
              />
          <div className='flex flex-col'>
              <label className='mb-1 font-medium' htmlFor="">Username</label>
              <input 
              className='w-full lowercase   outline-none  focus:ring-0 rounded-l-md md:rounded-md '
              type="text"
              value={username}
              name="name"
              onChange={(e)=>{setusername(e.target.value)}}
              />
          </div> 
          <div className='flex flex-col'>
              <label className='mb-1 font-medium' htmlFor="">Display Name</label>
              <input 
              className='w-full lowercase   outline-none  focus:ring-0 rounded-l-md md:rounded-md '
              type="text"
              value={username}
              name="name"
              onChange={(e)=>{setusername(e.target.value)}}
              />
              <p className='text-xs text-slate-500'>This could be your first name, or a nickname — however you’d like people to refer to you on LinkPath and if available will be displayed in place of your username.</p>
          </div> 
          {/* <div className='flex flex-col'>
              <label className='mb-1 font-medium' htmlFor="">Email Address</label>
             <input 
             className='w-full lowercase outline-none  focus:ring-0 rounded-l-xl md:rounded-md'
             type="text"
             value={email}
             name="email"
             onChange={(e)=>{setEmail(e.target.value)}}
             />
          </div> */}
          <div className='flex flex-col'>
              <label className='mb-1 font-medium' htmlFor="">Bio</label>
             <input 
             className='w-full   outline-none  focus:ring-0 rounded-l-xl md:rounded-md'
             placeholder='Description'
             type='text'
             value={bio}
             name="description"
             onChange={(e)=>{setBio(e.target.value)}}
            />
          </div>
          </div>
      </div>   
           

        <div className='flex items-center gap-3 justify-end px-3  w-full'>
          <button 
           onClick={handleShowModal} 
           className='py-1 px-2 rounded bg-slate-300 font-medium text-white'>
            Cancel
           </button>
           <button 
           onClick={handleShowModal} 
           type='button'
           className='py-1 px-2 rounded bg-cyan-600 font-medium text-white'>
           Save Changes
           </button>
        </div>
        {showModal ?<div onClick={handleShowModal} className='flex w-full h-full top-0 z-20 bg-cyan-600/10 flex-wrap items-center gap-2 justify-center absolute'>
        <div onClick={(e)=>{e.stopPropagation()}} className='w-4/5 md:w-2/5 lg:w-3/5 bg-white flex flex-col gap-6 md:gap-4 justify-center items-center md:p-5 p-8 rounded-lg shadow-lg border'>
          <span className='text-cyan-600 text-xl flex flex-col items-center'>
           <span>Update Profile</span>
           <span className='text-sm text-gray-500 text-center'>Are you sure you want to save this changes</span>
          </span>
          <span className='flex gap-3 w-full items-center justify-center'>
          <button  onClick={handleShowModal} className='hover:bg-gray-600/60 bg-gray-300 text-white p-1 rounded-md transition-all duration-200 delay-200'>Cancel</button>
          <button onClick={handleUserUpdate} className='hover:bg-cyan-600/60 bg-cyan-600 text-white p-1 rounded-md transition-all duration-200 delay-200'>Save</button>
         </span>
        </div>
     </div>: null}

     {loading? <div className='flex w-full h-full top-0 z-20 flex-wrap items-center gap-2 justify-center absolute'>
        <span className='w-3/5 md:w-2/5 lg:w-3/5 flex flex-col justify-center items-center md:p-5 p-8'>
            <img className='lg:w-10 lg:h-10 w-6 h-6' src={loadingGif} alt="loading" />
        </span>
     </div>: null} 

   </div>
  )
}

export default EditProfile