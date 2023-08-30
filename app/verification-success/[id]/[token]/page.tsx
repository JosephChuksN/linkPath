"use client";

import  { FC, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const VerificationSuccess:FC = () => {
  const { push, query } = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/auth/verify/${query.id}/${query.token}`
        );
        const { token } = data;
        localStorage.setItem("token", token);
      } catch (error) {
        push(`/verify/invalid/${query.id}/user/${query.token}`);
      }
    };
    verify();
  }, [query]);

  return (
    <div className="flex flex-col gap-20  px-5 md:px-12 pt-14 h-screen lg:w-3/5 mx-auto ">
      <div className="lg:w-[45%]  flex  items-center mx-auto justify-center w-full">
        <span className="text-cyan-600 text-2xl lg:text-4xl  font-semibold">
          Linkpath
        </span>
      </div>
      <div className="flex flex-col gap-3 lg:w-[45%] mx-auto items-center justify-center bg-white shadow-lg rounded-lg p-3 border">
        <span className="text-xl lg:text-3xl text-cyan-600 w-full text-center">
          Thank you!
        </span>
        <span className="text-black font-medium text-center text-lg flex items-center gap-0.5">
          Your account has been verified
          <span className="text-cyan-600  text-sm">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </span>
        <span className="flex justify-center text-center text-base text-black">
          Click on the button below to login and go to your dashboard
        </span>
        <Link href="/login">
          <button className="transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 mx-auto w-32  bg-cyan-600  py-2 px-1 rounded-lg text-white">
            login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerificationSuccess;
