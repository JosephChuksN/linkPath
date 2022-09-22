import React, {useState, useRef, useEffect} from 'react'
import LinkPageData from './LinkPageData'
import {v4 as uuidv4} from 'uuid'
import { useAuth } from '../../../Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'



const LinkPage = ({siteData, setSiteData}) => {
const { user } = useAuth()
  const formRef = useRef()
  const [input, setInput] = useState("")
  // const [siteLink, setLink] = useState([{siteData}])


const addNewSite = (siteName, siteLink) =>{ return setSiteData([...siteData, {id:uuidv4(), siteName, siteLink}])}
 

//adds new link
const handleAddLink = async (e) => {
    e.preventDefault()
   
   //extracts Url hostname
  let siteName = new URL(input).hostname.replace("www", "")
  let link = input
  addNewSite(siteName, link)
  setInput('')
  

}



  return (
     <div className='flex flex-col gap-10 px-2 md:px-0 items-center '>
      <form ref={formRef} action="" onSubmit={handleAddLink} className='md:w-3/4 w-full'>
        <div className='flex  justify-center   '>
        <div className='flex w-full items-center justify-center lg:w-3/4 md:gap-5 '>
        <span className='flex bg-cyan-600/20 md:w-[70%] w-full   items-center gap-2 pl-5 text-slate-400 rounded-l-xl md:rounded-full'>
            <FontAwesomeIcon icon={faLink} />
            <span className='border border-slate-300 h-7 my-auto '></span>
             <input className='bg-transparent p-3 text-black  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-full border-none w-full' 
             type="url" 
             name="siteLink" 
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
                required
                />
            </span>
            <button type='submit'  className='bg-cyan-600 text-white p-3 rounded-r-xl md:rounded-full flex'>Add <span className='hidden md:block ml-1'>New Link</span></button>
        </div>
        </div>
        </form>
 <div className='flex flex-col items-center justify-center w-[100%]'>{
  siteData.map((data)=>(
    <LinkPageData 
      key={data.id} 
      siteInfo={data}
      siteData={siteData}
      setSiteData={setSiteData}  />
  ))
     }
 </div>
       

    </div>
  )
}

export default LinkPage