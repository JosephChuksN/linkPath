import { FC } from 'react'
import ResetPassForm from '@components/ResetPassword/ResetPassForm';

const ResetPassword:FC = () => {
  return (
    <>
      <div className="px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto ">
        <div className="lg:w-[45%] mx-auto py-5 flex justify-center items-center">
          <span className="text-cyan-600 text-2xl font-semibold">Linkpath</span>
        </div>
        <ResetPassForm />
      </div>
      
    </>
  );
}

export default ResetPassword;