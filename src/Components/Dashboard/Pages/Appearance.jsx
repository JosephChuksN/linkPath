import React, { useState, useRef} from 'react'
import { useAuth } from '../../../Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'



const Appearance = ({avater, setAvater, description, setDescription}) => {

  const imgInputRef = useRef()
const { user } = useAuth()
const prflName = user.name
const [ profilName, setProfileName] = useState(prflName)
const [active, setActive] = useState(false)

const handleActivebtn = ()=>{
   setActive(!active)
}

const handleImgUpload = (e)=>{   
    setAvater({"profilePic":URL.createObjectURL(e.target.files[0])}) 
}


  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-2 gap-3'>
        <div className='  flex flex-col gap-1'>
            <span className='text-cyan-700 font-semibold '>LAYOUT</span>
         <div className='w-full items-center mx-auto  border p-5 rounded '>
            <span className='font-medium '>Choose a layout of your Linkpath</span>
              
        <div className='flex md:flex-row-reverse  flex-col-reverse w-2/3  lg:px-0 px-5 items-center mx-auto gap-9 mt-3'>
            <span className='absolute w-5 h-5 rounded-full bg-green-500 lg:left-[15.7rem] md:left-[24rem] md:top-[15.3rem] right-[5.8rem] top-[18.3rem] flex items-center justify-center'> <FontAwesomeIcon className='text-white text-sm' icon={faCheck} /></span>
    <div className=' w-full rounded-lg py-2 bg-cyan-600/10'>
    <div className='flex flex-col items-center justify-center gap-2'>
       <div className='flex flex-col w-full items-center justify-center gap-1 pt-3'>
       <span className='w-16 h-16 bg-slate-900/30 rounded-full'></span>
       <span className='h-5 w-2/5  bg-cyan-600 rounded-md'></span>
       </div>
       <div className='flex flex-col w-full items-center gap-2 my-2'>
        <span className='w-3/4 h-4 bg-white rounded-md'></span>
        <span className='w-3/4 h-4 bg-white rounded-md'></span>
        <span className='w-3/4 h-4 bg-white rounded-md'></span>
        <span className='w-3/4 h-4 bg-white rounded-md'></span>
       </div>
    </div>
    </div>
    <div className='w-full py-4 rounded-lg bg-cyan-600/10'>
    <div className='flex flex-col items-center justify-center  '>
       <div className='flex flex-col w-full items-center justify-center'>
       <span className='w-3/4 h-24 border flex items-center justify-center bg-slate-900/10'><span className='w-[70%] h-[95%] border bg-slate-900/30'></span></span>
       <span className='h-5 w-3/4 bg-cyan-600 border-b'></span>
       </div>
       <div className='flex flex-col w-full items-center'>
        <span className='w-3/4 h-5 bg-white border-b '></span>
        <span className='w-3/4 h-5 bg-white border-b '></span>
        <span className='w-3/4 h-5 bg-white border-b '></span>
        <span className='w-3/4 h-5 bg-white border-b'></span>
       </div>
    </div>
    </div>
    </div>
        </div>
        </div> 

   <div className=' flex flex-col gap-1'>
   <span className='text-cyan-700 font-semibold '>PROFILE NAME AND IMAGE</span>
 
 
   <div className='flex flex-col gap-5 border rounded  p-3 py-5 '>
    <div className='flex gap-4'>
        <span className='w-28 h-28 rounded-full flex items-center bg-no-repeat bg-cover'style={{backgroundImage: `url(${avater.profilePic})`}}></span>
        <input ref={imgInputRef}
          type="file" 
          accept="image/*" 
          name="img"
          className="hidden"
          onChange={handleImgUpload}
         />
       <span className='flex items-center'><button onClick={()=>imgInputRef.current.click()} className='p-2 rounded bg-cyan-600 text-white hover:bg-cyan-600/80 transition-all delay-150 duration-500 ease-in-out'>Upload Image</button></span>
    </div>
    <div className='flex flex-col w-full lg:w-3/4'>
        <span className='flex justify-between'><input className='font-semibold focus:border-none focus:ring-0  outline-none' 
        value={profilName} 
        onChange={(e)=>{setProfileName(e.target.value)}} />
        <span className='text-sm text-slate-400'><FontAwesomeIcon icon={faPen} /></span></span>
        <span className='text-sm text-slate-400'>Profile Title</span>
    </div>
    <div className='flex flex-col gap-4 w-full lg:w-3/4'>
        <span className='flex justify-between items-center'><span>Hide Image</span><span className='flex gap-3 items-center'>
          <span onClick={handleActivebtn} className={`w-14 h-5  rounded-full flex items-center px-0.5 ${active? 'bg-green-500' : 'bg-slate-400' }`}>
          <span  className={`w-4 h-4 relative rounded-full transition-all duration-1000 delay-300 ease-in-out bg-white ${active? 'left-9': " "}`}>
          </span></span><span className='transition-all delay-700 duration-500'>{active?<span>ON</span>:<span>OFF</span>}</span></span></span>
        <span className='flex justify-between items-center'><span>Hide Name</span><span className='flex gap-3 items-center'><span className='w-14 h-5 bg-slate-400 rounded-full flex items-center px-0.5'><span className='w-4 h-4 rounded-full bg-white'></span></span><span>OFF</span></span></span>
        
    </div>
   
    
  </div>
 
  <div>
  
    </div>
   </div>
   <div>
   <span className='text-cyan-700 font-semibold pt-2 '>DESCRIPTION</span>
      <textarea className='w-full resize-none rounded border-slate-400/30 bg-gray-50'
      name="description" 
      id="" 
      rows="4"
      value={description}
      maxLength="50"
      placeholder='Description'
      onChange={(e)=>setDescription(e.target.value)}
      
      />
   </div>
    </div>
  )
}

export default Appearance