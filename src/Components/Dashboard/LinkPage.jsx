import React, {useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../Context/AppContext'
import LinkPageData from './LinkPageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEye } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'flowbite-react'
import loadingGif from '../../assets/loading.gif'



const LinkPage = () => {

  const { CreateSitelink, links, loading } = useAuth()
  const formRef = useRef()
  const [input, setInput] = useState("")
  const [addLoading, setAddLoading] = useState(false)
  const navigate = useNavigate()
  
 


//adds new link
  const handleAddLink = async (e) => {
    e.preventDefault()
   setAddLoading(true)
   //extracts Url hostname
  var hostName = new URL(input).hostname.replace("www.", "")
  let siteName = hostName.substring(0, hostName.indexOf("."))
  let siteLink = input
  await CreateSitelink(siteLink, siteName)
  setInput('')
  setAddLoading(false)
 }
  const handleNavigate = () =>{ return navigate("/preview")}



  return (
<div className='flex flex-col gap-10 px-2 md:px-0 items-center mt-3 lg:mt-0'>
 <form ref={formRef} action="" onSubmit={handleAddLink} className='md:w-3/4 w-full'>
    <div className='flex  justify-center'>
    <div className='flex w-full items-center justify-center lg:w-3/4 md:gap-5 '>
    <span className='flex bg-slate-300/30 md:w-[70%] w-full border items-center gap-2 pl-5 text-slate-400 rounded-l-xl md:rounded-md'>
    <FontAwesomeIcon className='text-gray-400' icon={faLink} />
    <span className='border-l-2  border-slate-300 h-7 my-auto '></span>
    <input className='bg-transparent p-3 text-black  outline-none  focus:border-none focus:ring-0 rounded-l-xl md:rounded-md border-none w-full' 
     type="url" 
     name="siteLink" 
     value={input}
     onChange={(e)=>{setInput(e.target.value)}}
     placeholder="http://example.com"
     required
     />
      </span>
      <button  type='submit'  className={`hover:bg-cyan-700 relative transition-all duration-150 delay-75 ease-in-out bg-cyan-600 text-white p-3 rounded-r-xl md:rounded-md flex`}>
       Add 
       <span className='hidden md:block ml-1'>
        New Link
       </span>
       <span className={`${!addLoading? "hidden" : ""} absolute w-1/2 justify-center flex items-center `}>
        <img className='w-4 h-4' src={loadingGif} alt="loading" />
      </span>
      </button>
      </div>
    </div>
 </form>

 { links.length ===0? 
  <div className='flex flex-col items-center justify-center w-[100%] h-52 animate-bounce'> 
      <p className='text-xl text-cyan-600/40 font-semibold'>
        Paste Your First Link
      </p>
  </div>:
  <div className='flex flex-col items-center justify-center w-[100%]'>{
    loading? 
    <div className='flex w-full top-0 z-20  flex-wrap items-center gap-2 justify-center h-full '>
      <span className='text-4xl text-cyan-600'><Spinner
        aria-label="Extra large spinner example"
        size="lg"
        color="success"
      />
      </span>
    </div>:
      links.map((data)=>(
       <LinkPageData 
        key={data._id} 
        siteInfo={data}
        />
       ))}
   </div>
 }
  <div className='flex w-full justify-center items-center'>
        
  <span onClick={handleNavigate} className={`${links.length === 0 ? "hidden": ""} xl:hidden absolute rounded-full  bg-cyan-600 text-white p-2 flex gap-2 items-center text-xl`}>
    <span className='text-sm'>
     <FontAwesomeIcon icon={faEye} />
    </span>  
     Preview
  </span>
  </div>
  </div>
  )
}

export default LinkPage