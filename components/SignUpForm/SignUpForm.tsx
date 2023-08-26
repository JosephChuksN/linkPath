"use client"

import { FC, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import LoadingGif from '@assets/loading.gif';
import { useAuth } from '@Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm:FC = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConFirmPass] = useState("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const { registerUser, regError, setRegError, loading, emailVerified } =
    useAuth();

    const handleViewPassword = () => {
      setShowPass(!showPass);
    };
     const handleViewPassConfirm = () => {
       setShow(!show);
     };

     const notify = () => {
       toast.success("password change complete", {
         autoClose: 1000,
       });
     };

  //creates a user account
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPass) {
        return setRegError("Password must match");
      }

      registerUser(name, email, password);
      setname("");
      setEmail("");
      setConFirmPass("");
      setPassword("");
    } catch (error) {
        
    } finally {
        notify()
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="p-3 bg-white  border-gray-300 border-[0.5px] rounded-md  lg:w-[45%] mx-auto py-5"
    >
      <span
        className={`${
          regError === "" ? "hidden" : "block"
        } text-center bg-red-600 text-white p-1 rounded-md`}
      >
        {regError}
      </span>
      <span
        className={`${
          emailVerified === "" ? "hidden" : "block"
        }  bg-green-500 text-sm text-white px-1 text-center py-3 rounded-md`}
      >
        {emailVerified}
      </span>
      <div className=" flex flex-col gap-5 mt-3">
        <span className="text-2xl font-semibold flex items-center justify-start text-cyan-600">
          Create account
        </span>

        <div className="flex flex-col">
          <label className="p-1 font-medium" htmlFor="">
            Username
          </label>
          <input
            className="rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            value={name}
            name="username"
            required
          />
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
            name="email"
            required
          />
        </div>
        <div className="flex flex-col relative">
          <label className="p-1 mb-1 font-medium" htmlFor="">
            Password
          </label>
          <input
            className="rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={showPass ? "text" : "password"}
            value={password}
            name="pass"
            required
            placeholder="******"
          />
          <span
            onClick={handleViewPassword}
            className="absolute top-10 right-3 text-cyan-600"
          >
            <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
          </span>
        </div>
        <div className="flex flex-col relative">
          <label className="p-1 mb-1 font-medium" htmlFor="">
            Re-enter password
          </label>
          <input
            className="rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setConFirmPass(e.target.value);
            }}
            type={show ? "text" : "password"}
            value={confirmPass}
            name="confirmPass"
            required
            placeholder="******"
          />
          <span
            onClick={handleViewPassConfirm}
            className="absolute top-10 right-3 text-cyan-600"
          >
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
          </span>
        </div>

        <div className="flex items-center">
          <button
            disabled={loading}
            className="transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 bg-cyan-600 w-full p-1 rounded-md text-white my-2"
            type="submit"
          >
            {loading ? (
              <span className="flex gap-3">
                <Image src={LoadingGif} width={20} height={20} alt="loading" />{" "}
                <p>Signing up...</p>
              </span>
            ) : (
              <p>Continue</p>
            )}
          </button>
        </div>
        <div className="w-3/5 border-b-[1px] border-slate-300  mx-auto"></div>
        <div className="p-1 flex items-center justify-start gap-2">
          <span className="text-sm text-black">Already have an account?</span>
          <Link href="/login">
            <span className="text-cyan-600">Log in</span>
          </Link>
        </div>
      </div>
      <ToastContainer limit={1} />
    </form>
  );
}

export default SignUpForm