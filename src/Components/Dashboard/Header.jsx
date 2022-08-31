import React from 'react'



const Header = ({user}) => {
  return (
    <div className='flex justify-between items-center py-5 px-2'>
        
            <span className='text-2xl font-semibold'>Linkpath</span>
         <div className='flex gap-5 items-center'>
            <span className='text-cyan-600'>
                {`linkpath//${user.email}`}
            </span>
            <span className='w-14 h-14 rounded-full bg-yellow-300'></span>
         </div>
        
    </div>
  )
}

export default Header