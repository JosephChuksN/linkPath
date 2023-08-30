"use client"

import { FC, useState } from 'react'
import {  useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassForm:FC = () => {
     const [password, setPassword] = useState<string>("");
     const [confirmPassword, setConfirmPassword] = useState<string>("");
     const [resetError, setResetError] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);
     const [success, setSuccess] = useState<string>("");
     const router= useRouter();
     const { query } = router

     
  const updateDone = (updateSuccess) => {
    toast.info(updateSuccess, {
      autoClose: 1000,
    });
  };
  const handleReset = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword)
        return setResetError("Password must match");
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/reset/${query.id}/${query.token}`,
        { password }
      );
      setLoading(false);
      setSuccess(data.msg);
      setPassword("");
      setConfirmPassword("");
      updateDone(success);
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    } catch (error) {
      setResetError(error.response.data.msg);
      setLoading(false);
      setPassword("");
      setConfirmPassword("");
    }
  };


  return (
    <form
      onSubmit={handleReset}
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
          resetError === "" ? "hidden" : "block"
        } border border-red-600 bg-red-200 text-red-600 p-1 rounded-md`}
      >
        {resetError}
      </span>
      <div className=" flex flex-col gap-5">
        <div className="flex flex-col gap-1  items-center justify-start">
          <span className="text-2xl font-semibold w-full flex text-cyan-600">
            Reset Password
          </span>
          <span className="text-black text-sm font-medium">
            Please enter your new password for your Linkpath account..
          </span>
        </div>
        <div className="flex flex-col">
          <label className="p-1 mb-1 font-medium" htmlFor="">
            Password
          </label>
          <input
            className="rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="p-1 mb-1 font-medium" htmlFor="">
            Re-enter password
          </label>
          <input
            className="rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            value={confirmPassword}
            required
          />
        </div>
        <div className="flex items-center">
          <button
            className="transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 bg-cyan-600 w-full p-1 rounded-md text-white my-2"
            disabled={loading}
            type="submit"
          >
            Reset
          </button>
        </div>
      </div>
      <ToastContainer limit={1} />
    </form>
  );
}

export default ResetPassForm