import React, { useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faContactCard, faShareNodes } from '@fortawesome/free-solid-svg-icons';




const Subnavigation = () => {


  const [active, setActive] = useState(false)
    

    const isActiveLink ="bg-cyan-600/10   transitional-all text-cyan-700 rounded-md ease-linear"
const navData = [
    {id:1, name:'Links', icon:faLink, link:'.'},
    {id:2, name:'Socials', icon:faShareNodes, link:'socials'},
    {id:3, name:'Contact', icon:faContactCard, link:'contact'},
]
 


  return (
   <>
    <div className= ' mb-3 flex justify-center items-center bg-white z-20  py-5 '>
        <ul className='flex px-10 gap-10 text-gray-400  text-[1rem] font-normal justify-left w-full lg:w-3/5 '>{
        navData.map((data)=>(
           <NavLink  className={({isActive})=> isActive? isActiveLink  : null}  key={data.id} to={data.link} end>
            <span className='text-xl w-24 h-24 flex flex-col gap-3 justify-center items-center '>
           <span className={`flex items-center justify-center rounded-full w-12 h-12 bg-slate-300/30  `}><FontAwesomeIcon  icon={data.icon} /></span>
            <span className='text-base '>{data.name}</span>
            </span>
           </NavLink>
        ))    
            }</ul>
    </div>
 

    </>
  )
}

export default Subnavigation