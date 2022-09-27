import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';



const DashboardNav = () => {

  const { user } = useAuth()

    const isActiveLink =" border-b-4 border-cyan-600 transitional-all  ease-linear"
const navData = [
    {id:1, name:'Links', link:'link'},
    {id:2, name:'Appearance', link:'appearance'},
    {id:4, name:'Settings', link:'settings'},
    

]
    


  return (
   <>
    <div className= ' md:mb-5 mb-3 sticky bg-white z-20 top-0'>
        <ul className='flex  px-3 gap-10 text-[1rem] font-normal text-cyan-600 border-b'>{
        navData.map((data)=>(
           <NavLink className={({isActive})=> isActive? isActiveLink : null} key={data.id} to={data.link}><li className='py-3'>{data.name}</li></NavLink>
        ))    
            }</ul>
    </div>
 

    </>
  )
}

export default DashboardNav