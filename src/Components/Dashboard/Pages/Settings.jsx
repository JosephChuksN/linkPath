import React from 'react'
import { useAuth } from '../../../Context/AuthContext'





const Settings = () => {

  const { user } = useAuth()
  return (
    <div className='flex flex-col  w-full px-3 lg:w-3/4 items-center mx-auto gap-5'>
        <div className='flex flex-col  w-full  lg:w-3/5  items-center gap-3 shadow-md p-3 border rounded'>
          <span className='w-full text-cyan-600 font-medium text-lg'>Change your email</span>
          <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
          type="text"
          value={user.email}
          // eslint-disable-next-line no-unused-expressions
          onChange={(e)=>{e.target.value}}
          />
        <div className='flex items-center justify-end gap-3 w-full'>
        <button className='py-1 px-2 rounded bg-slate-400 text-white'>Cancel</button>
          <button className='py-1 px-2 rounded bg-cyan-600 text-white'>Reset</button>
        </div>
        </div>
        <div className='flex flex-col  w-full  lg:w-3/5  items-center gap-3 shadow-md p-3 border rounded'>
        <span className='w-full text-cyan-600 font-medium text-lg'>Change your password</span>
        <div className='flex flex-col w-full gap-3'>
        <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'

        type="text" 
        placeholder='Current Password'
        
        />
         <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
        
        type="text"
        placeholder='New Password' 
        
        />
         <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
        
        type="text" 
        placeholder='Confirm Password'
        
        />
        </div>
        <div className='flex items-center justify-end gap-3 w-full'>
        <button className='py-1 px-2 rounded bg-slate-400 text-white'>Cancel</button>
          <button className='py-1 px-2 rounded bg-cyan-600 text-white'>Reset</button>
        </div>
       
        </div>
    </div>
  )
}

export default Settings