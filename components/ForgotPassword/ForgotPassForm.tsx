"use client"

import { FC, useState } from 'react'
import Image from 'next/image';
import LoadingGif from '@assets/loading.gif'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ForgotPassForm:FC = () => {
     const [email, setEmail] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);
     const [success, setSuccess] = useState<string>("");
     const [faild, setFaild] = useState<string>("");


     const updateDone = () => {
       toast.info(success, {
         autoClose: 1000,
       });
     };
     const handleSendLink = async (e) => {
       e.preventDefault();
       setLoading(true);
       try {
         const { data } = await axios.post(
           `${process.env.NEXT_PUBLIC_API_URL}auth/resetlink`,
           { email }
         );

         setLoading(false);
         setSuccess(data.msg);
         setEmail("");
         updateDone();
       } catch (error) {
         setLoading(false);
         setFaild(error.response.data.msg);
         setEmail("");
       }
     };

  return (
    <form
      onSubmit={handleSendLink}
      className="p-3   border-gray-300 border-[0.5px] rounded-md  lg:w-[45%] mx-auto py-5"
    >
      <span
        className={`${
          success === "" ? "hidden" : "block"
        } border bg-green-400 text-center text-white p-1 rounded-md`}
      >
        {success}
      </span>
      <span
        className={`${
          faild === "" ? "hidden" : "block"
        } border bg-red-600 text-center text-white p-1 rounded-md`}
      >
        {faild}
      </span>
      <div className=" flex flex-col gap-5">
        <div className="flex flex-col gap-1  items-center justify-start">
          <span className="text-2xl font-semibold w-full flex text-cyan-600">
            Password reset
          </span>
          <span className="text-black text-sm font-medium">
            Please enter your email address associated with your Linkpath
            account.
          </span>
        </div>
        <div className="flex flex-col">
          <label className="p-1 mb-1 font-medium" htmlFor="">
            Email Address
          </label>
          <input
            className="rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            required
          />
        </div>
        <div className="flex items-center">
          <button
            className="transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 bg-cyan-600 w-full p-1 rounded-md text-white my-2"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <span className="flex gap-3">
                <Image src={LoadingGif} width={20} height={20} alt="loading" />{" "}
                <p>loading...</p>
              </span>
            ) : (
              <p>Continue</p>
            )}
          </button>
        </div>
      </div>
      <ToastContainer limit={1} />
    </form>
  );
}

export default ForgotPassForm