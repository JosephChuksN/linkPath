import  { FC } from 'react'
import LoginForm from '@components/LoginForm/LoginForm';
import Home2 from "@assets/Home2.svg";
import Link from 'next/link';
import Image from 'next/image';





const Login:FC = () => {

  return (
    <>
      <div className="px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto relative">
        <div className="lg:w-[45%] mx-auto py-5 flex justify-center items-center">
          <span className="text-cyan-600 text-2xl font-semibold">Linkpath</span>
        </div>
        <LoginForm 
        />
        <div className="lg:w-[45%] mx-auto py-5">
          <div className=" flex flex-col gap-1 items-center justify-center ">
            <span className="text-xs w-full flex  items-center justify-center">
              <hr className="w-[45%] border-t-[0.01px] border-gray-300" />
              <span className="w-2/5 text-center">New to Linkpath?</span>
              <hr className="w-2/5 border-t-[0.01px] border-gray-300" />
            </span>
            <Link className="w-full  flex my-2 " href="/signup">
              <span className="border-[0.5px] border-gray-400 w-full p-1 rounded-md text-black text-base text-center transition-all duration-150 ease-in-out hover:bg-cyan-50">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
        <span className="absolute top-0 z-[-1] lg:-top-5 right-0 lg:-right-[19rem]">
          <Image src={Home2} width={600} height={600} alt="deco" />
        </span>
      </div>
    </>
  );
}

export default Login