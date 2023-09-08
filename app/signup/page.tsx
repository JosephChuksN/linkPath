import { FC } from 'react'
import Image from 'next/image';
import SignUpForm from '@components/SignUpForm/SignUpForm';
import Home1 from '@assets/Home1.svg'

const SignUp:FC = () => {
  return (
    <>
      <div className="px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto relative">
        <div className="lg:w-[45%] mx-auto py-5 flex justify-center items-center">
          <span className="text-cyan-600 text-2xl font-semibold">Linkpath</span>
        </div>
        <SignUpForm />
        <span className="absolute -top-40 lg:bottom-0 -left-80  z-[-1]  ">
          <Image 
          src={Home1} 
          width={600}
          height={600}
          alt="deco" />
        </span>
      </div>
    </>
  );
}

export default SignUp