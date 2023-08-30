'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavData {
    id: number
    name: string
    link: string
}

const DashboardNav:FC = () => {

    const pathName = usePathname()
    const isActiveLink: string ="border-b-[3.5px] text-cyan-700 border-cyan-600 transitional-all  ease-linear";
    const navData: NavData[] = [
      { id: 1, name: "Links", link: "/dashboard" },
      { id: 2, name: "Appearance", link: "/appearance" },
      { id: 4, name: "Settings", link: "/settings" },
    ];


  return (
    <>
      <div className="sticky bg-white z-20 top-0">
        <ul className="flex px-3 gap-10 text-[1rem] font-normal text-gray-400 border-b">
          {navData.map((data) => (
            <Link
              className={pathName == `${data.link}` ? isActiveLink : ""}
              key={data.id}
              href={data.link}
            >
              <li className="transition-all duration-200 delay-75 ease-in-out hover:bg-gray-200 rounded-md py-3 font-semibold w-24 md:w-28 text-center">
                {data.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DashboardNav