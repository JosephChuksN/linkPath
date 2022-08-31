import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const DashboardNav = () => {

    const isActiveLink =" border-b-2 rounded-sm border-green-400 "
const navData = [
    {id:1, name:'Link', link:''},
    {id:2, name:'Appearance', link:''},
    {id:3, name:'Analytics', link:''},
    {id:4, name:'Settings', link:''},
    

]
    


  return (
    <div>
        <ul className='flex  px-3 gap-10 text-[1rem] font-normal text-cyan-600 border-b'>{
        navData.map((data)=>(
           <NavLink className={({isActive})=> isActive? isActiveLink : null} id={data.id} to={data.link}><li className='py-5'>{data.name}</li></NavLink>
        ))    
            }</ul>
    </div>
  )
}

export default DashboardNav