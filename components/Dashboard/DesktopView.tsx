'use client'

import { FC, useEffect } from 'react'
import { useAuth } from '@Context/AppContext';


const DesktopView:FC = () => {

    const { user, links, getLinks, description } = useAuth();
    useEffect(() => {
      getLinks();
    }, []);
     
  return (
    <div className="hidden xl:block h-screen w-[20%] fixed right-14 ">
      <div className="h-[80%] mt-12 flex items-center justify-center flex-col rounded-3xl  border-x-[10px] border-black shadow-2xl border-y-[60px]  ">
        <span className="w-12 h-1 bg-gray-600 absolute top-[4.8rem] rounded-md"></span>
        <span className="w-10 h-10 bg-gray-600 absolute bottom-28 rounded-full"></span>

        <div className="flex flex-col w-full px-6 h-full bg-cyan-600/20 items-center overflow-y-auto justify-between">
          <div className="flex flex-col w-full">
            <div
              className={`${
                user?.profileImg ? "bg-white" : null
              } flex flex-col h-44 items-center justify-center gap-1 w-full bg-no-repeat bg-contain`}
              style={{ backgroundImage: `url(${user?.profileImg})` }}
            >
              <span
                className={`${
                  !user?.profileImg ? "bg-white" : "bg-black/40"
                } w-full h-full flex items-center justify-center  py-1 `}
              >
                <span
                  className="w-[85%] h-full bg-no-repeat bg-cover border border-transparent flex items-center justify-center capitalize font-bold text-5xl "
                  style={{ backgroundImage: `url(${user?.profileImg})` }}
                >
                  {!user?.profileImg ? user?.name.charAt(0) : null}
                </span>
              </span>
            </div>
            <span className="flex flex-col   py-3 w-full text-center bg-cyan-600">
              <span className="text-md font-medium  text-white capitalize">
                {user?.name}
              </span>
              <span className="text-[10px] text-gray-100 whitespace-pre-wrap ">
                {description}
              </span>
            </span>
            <div className="w-full">
              {links?.map((data) => (
                <div
                  className="flex  items-center py-4 bg-white justify-between px-1 border-b"
                  key={data._id}
                >
                  <div className="flex gap-3 items-center">
                    <span
                      className="w-10 h-10 rounded bg-no-repeat bg-cover"
                      style={{ backgroundImage: `url(${data.linkImg})` }}
                    ></span>
                    <span className="font-medium capitalize flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: `url(https://${
                            new URL(data.siteLink).hostname
                          }/favicon.ico)`,
                        }}
                      ></span>
                      <a href={data.siteLink} target="blank">
                        {data.siteName}
                      </a>
                    </span>
                  </div>
                  <span className="px-1 bg-gray-300/40 rounded">
                    <a href={data.siteLink} target="blank">
                      Visit
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <span className="flex w-full justify-end pr-3 py-4  font-semibold text-xl ">
            <span>Linkpath</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DesktopView