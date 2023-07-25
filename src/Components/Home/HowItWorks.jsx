import React from 'react'
import  happy  from '../../assets/happy.svg'
import  linkicon  from '../../assets/linkicon.svg'
import  check  from '../../assets/check.svg'
import  user  from '../../assets/user.svg'
import soundCloud from '../../assets/Soundcloud.png'
import snapchat from '../../assets/Snapchat.png'
import skype from '../../assets/Skype.png'
import Home3 from '../../assets/Home3.svg'





const HowItWorks = () => {
  return (
    <div id='guide' className='flex flex-col font-poppins bg-[#F3F3F3] lg:flex-row items-center mx-auto w-full py-3 lg:px-20 px-3 lg:py-24 relative'>
        <div className='w-full lg:w-2/5 flex items-center '>
            <span className='font-medium text-2xl lg:text-4xl text-cyan-600 mx-auto'>How Does It work?</span>
        </div>

        <div className='grid gird-rows-4 grid-flow-row lg:grid-cols-2 lg:justify-items-center lg:grid-flow-row lg:p-20 p-5 gap-24  w-full lg:w-3/5'>
        <div className='flex flex-col p-2  lg:p-1 gap-3'>
            <span className='flex gap-3 items-center'>
                <span className='w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center'>
                    <img src={user} alt="user icon" />
                </span>
                <span className='text-2xl font-semibold'>Create Profile</span>
            </span>
            <span className='text-lg leading-loose'>Sign up to linkpath with just few steps</span>
        </div>
        <div className='flex flex-col p-1 gap-3'>
            <span className='flex gap-3 items-center'>
                <span className='w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center'>
                <img src={linkicon} alt="link icon" />
                </span>
                <span className='text-2xl font-semibold'>Insert Links</span>
            </span>
            <span className='text-lg leading-loose'>Add the links to the accounts you wish to link</span>
        </div>
        <div className='flex flex-col p-1 gap-3'>
            <span className='flex gap-3 items-center'>
                <span className='w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center'>
                <img src={check} alt="check icon" />
                </span>
                <span  className='text-2xl font-semibold'>Generate link</span>
            </span>
            <span className='text-lg leading-loose'> Click on enter and generate the all in one link</span>
        </div>
        <div className='flex flex-col p-1 gap-3'>
            <span className='flex gap-3 items-center'>
                <span className='w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center'>
                <img src={happy} alt="happy icon" />
                </span>
                <span className='text-2xl font-semibold'>Personalize</span>
            </span>
            <span className='text-lg leading-loose'>You can choose to add your picture and a bio to your account</span>
        </div>
        </div>
        <span className='absolute top-3 right-5'><img src={snapchat} alt="snapchat"/></span>
        <span className='absolute  lg:left-28 left-4  top-32 lg:top-20'><img src={skype} alt="skype" /></span>
        <span className='absolute left-16 bottom-16 lg:bottom-32'><img src={soundCloud} alt="soundcloud" /></span>
        <span className='absolute top-5 lg:top-0 right-0'><img src={Home3} alt="deco" /></span>
    </div>
  )
}

export default HowItWorks