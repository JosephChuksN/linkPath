'use client'

import { FC, FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import LinkPage from '@components/Dashboard/Links/LinksPage';
import { useAuth } from '@Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEye } from '@fortawesome/free-solid-svg-icons';
import LoadingGif from '@assets/loading.gif'
import Image from 'next/image';

const Links:FC = () => {
  const { createSitelink, links, loading } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);
  const [input, setInput] = useState("");
  const [addLoading, setAddLoading] = useState<boolean>(false);
  const { push } = useRouter()

  //adds new link
  const handleAddLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddLoading(true);
    //extracts Url hostname
    var hostName = new URL(input).hostname.replace("www.", "");
    let siteName = hostName.substring(0, hostName.indexOf("."));
    let siteLink = input;
    await createSitelink(siteLink, siteName);
    setInput("");
    setAddLoading(false);
  };
  const handleNavigate = () => {
    return push("/preview");
  };

  return (
    <div className="flex flex-col gap-10 px-2 md:px-0 items-center md:pt-10 mt-3 lg:mt-0">
      <form
        ref={formRef}
        action=""
        onSubmit={handleAddLink}
        className="md:w-3/4 w-full"
      >
        <div className="flex  justify-center">
          <div className="flex w-full items-center justify-center lg:w-3/4 md:gap-5 ">
            <span className="flex bg-slate-300/30 md:w-[70%] w-full border items-center gap-2 pl-5 text-slate-400 rounded-l-xl md:rounded-md">
              <FontAwesomeIcon className="text-gray-400" icon={faLink} />
              <span className="border-l-2  border-slate-300 h-7 my-auto "></span>
              <input
                className="bg-transparent p-3 text-black  outline-none  focus:border-none focus:ring-0 rounded-l-xl md:rounded-md border-none w-full"
                type="url"
                name="siteLink"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="http://example.com"
                required
              />
            </span>
            <button
              type="submit"
              className={`hover:bg-cyan-700 relative transition-all duration-150 delay-75 ease-in-out bg-cyan-600 text-white p-3 rounded-r-xl md:rounded-md flex`}
            >
              Add
              <span className="hidden md:block ml-1">New Link</span>
              <span
                className={`${
                  !addLoading ? "hidden" : ""
                } absolute w-1/2 justify-center flex items-center `}
              >
                <Image src={LoadingGif} width={20} height={20} alt="loading" />
              </span>
            </button>
          </div>
        </div>
      </form>

      {links?.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-[100%] h-52 animate-bounce">
          <p className="text-xl text-cyan-600/40 font-semibold">
            Paste Your First Link
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-[100%]">
          {loading ? (
            <div className="flex w-full top-0 z-20  flex-wrap items-center gap-2 justify-center h-full ">
              <span className="text-4xl text-cyan-600">
                <Image src={LoadingGif} width={50} height={50} alt="loading" />
              </span>
            </div>
          ) : (
            links?.map((data) => (
              <LinkPage key={data._id} siteInfo={data} />
            ))
          )}
        </div>
      )}
      <div className="flex w-full justify-center items-center">
        <span
          onClick={handleNavigate}
          className={`${
            links?.length === 0 ? "hidden" : ""
          } xl:hidden absolute rounded-full  bg-cyan-600 text-white p-2 flex gap-2 items-center text-xl`}
        >
          <span className="text-sm">
            <FontAwesomeIcon icon={faEye} />
          </span>
          Preview
        </span>
      </div>
    </div>
  );
}

export default Links