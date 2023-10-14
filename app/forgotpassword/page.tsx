import { FC } from 'react'
import Link from 'next/link';
import ForgotPassForm from '@components/ForgotPassword/ForgotPassForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; 

const Forgetpassword:FC = () => {
  return (
    <>
      <div className="px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto ">
        <div className="lg:w-[45%] mx-auto py-5 flex justify-center items-center">
          <h1 className="text-cyan-600 text-2xl font-semibold">Linkpath</h1>
        </div>
        <ForgotPassForm />
        <div className="lg:w-[45%] flex flex-col mx-auto  py-5 items-center justify-center">
          <Link href="/login">
            <span className=" flex items-center gap-2 transition-all delay-75 duration-300 ease-in-out hover:text-cyan-700 text-cyan-600 font-medium">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              <p>Back to login</p>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Forgetpassword