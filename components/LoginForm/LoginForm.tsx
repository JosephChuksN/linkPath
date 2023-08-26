"use client"

import { FC, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@Context/AppContext';
import LoadingGif from "@assets/loading.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const LoginForm:FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState<boolean>(false)
   const { login, loginError, loading, emailVerifiedLogin } = useAuth();

  const handleLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  const handleViewPassword = () => {
    setShow(!show)
  }


  return (
    <form
      action=""
      onSubmit={handleLogin}
      className="p-3  bg-white  border-gray-300 border-[0.5px] rounded-md  lg:w-[45%] mx-auto py-5"
    >
      <span
        className={`${
          loginError === "" ? "hidden" : "block"
        } text-white bg-red-600 px-1 py-3 text-center rounded-md`}
      >
        {loginError}
      </span>
      <span
        className={`${
          emailVerifiedLogin === "" ? "hidden" : "block"
        }  bg-green-500 text-sm text-white px-1 text-center py-3 rounded-md`}
      >
        {emailVerifiedLogin}
      </span>
      <div className=" flex flex-col gap-5">
        <span className="text-2xl font-semibold flex items-center justify-start text-cyan-600">
          Login to your account
        </span>
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

        <div className="flex flex-col relative">
          <label className="p-1 mb-1 font-medium" htmlFor="">
            Password
          </label>
          <input
            className="rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={show ? "text" : "password"}
            value={password}
            required
            placeholder="******"
          />
          <span
            onClick={handleViewPassword}
            className="absolute top-10 right-3"
          >
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
          </span>
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
                <p>Signing in...</p>
              </span>
            ) : (
              <p> Sign in</p>
            )}
          </button>
        </div>

        <div className="w-full flex items-center justify-end">
          <Link href="/forgotpassword">
            <span className="text-blue-600  text-sm hover:text-purple-600">
              Forgot Password?
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default LoginForm