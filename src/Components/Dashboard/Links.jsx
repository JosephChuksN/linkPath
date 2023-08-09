import React from 'react'

const Links = () => {
  return (
    <form className='flex flex-col gap-3'>
    <div className='flex gap-5 items-center relative'>
          <input 
                ref={imgInputRef} 
                className='hidden' 
                type="file" 
                accept="image/*" 
                name="profileImg"
                onChange={handleImgChange} 
                />
                <input 
                  ref={siteNameInputRef} 
                  className='md:text-base text-sm font-medium  focus:border-none focus:ring-0  outline-none capitalize'
                  value={siteName}
                  name="siteName"
                  id={id}
                  onChange={(e)=>{setSiteName(e.target.value)}}
                  onFocus={()=>setSiteNameFocus(true)}
                  onBlur={()=>{setSiteNameFocus(false)}}
                />
                <span  className={`${siteNameFocus? "hidden" : ""} text-slate-300  text-[0.8rem] `}
                   onClick={()=>{siteNameInputRef.current.focus()}}
                >
                   <FontAwesomeIcon icon={faPen} />
                </span>
          </div>
    <div className='flex items-center gap-0.5'>
               <span className='w-4 h-4 rounded-full flex items-center justify-center bg-no-repeat bg-cover' 
                style={{backgroundImage: `url(${siteImg})`}}
                >
               </span>
    <div>
               <input 
                   ref={siteLinkInputRef} 
                   className='text-purple-500 md:text-base text-xs truncate font-medium focus:border-none focus:ring-0  outline-none'
                   value={siteLink}
                   name="siteLink"
                   id={id}
                   onChange={(e)=>{setSiteLink(e.target.value)}}
                   onFocus={()=>setSiteLinkFocus(true)}
                   onBlur={()=>{setSiteLinkFocus(false)}}
                />
                <span  className={`${siteLinkFocus? "hidden" : ""} text-slate-300 text-[0.8rem] `}
                  onClick={()=>{siteLinkInputRef.current.focus()}}
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
    </div>
    </div>
    </form>
  )
}

export default Links