"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import menoInformation from "@/constants/menoInformation";
import { FaArrowLeft } from "react-icons/fa6";
import { ArrowLeft, Indicator } from "@/common/icons/Icons";
import { usePathname } from "next/navigation";

function Meno({ desktop }) {
  const [dropdown, setDropdown] = useState("");
  const [goToPage, setGotoPage] = useState(null);
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul
        className={`${
          desktop
            ? "flex-row items-center text-[1rem]   w-auto gap-x-6 "
            : "flex-col  text-[.9rem] pr-7 pt-10 w-full"
        } flex  text-default-600  `}
      >
        {menoInformation.map((item) => {
          return (
            <li
              key={item.id}
              className={`${desktop ? "w-auto " : "w-full"} ${
                item.desktop ? "" : "xl:hidden "
              }`}
            >
              {item.details.length === 0 ? (
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href && "text-primary-500"
                  } ${desktop && pathname === item.href&&"border-b-2 border-primary-500 rounded-lg"} flex items-center justify-start flex-row `}
                >
                  {!desktop && pathname === item.href && (
                    <span className="absolute right-0 text-primary-500">
                      <Indicator width={18} height={81} />
                    </span>
                  )}{" "}
                  <div
                    className={` py-3 flex  items-center justify-start cursor-pointer hover:text-primary-500`}
                  >
                    <span className={`${desktop ? "hidden" : "pl-2"}`}>
                      {item.icone}
                    </span>
                    <h2>{item.label}</h2>
                  </div>
                </Link>
              ) : (
                <div
                  className={`${
                    desktop ? "w-30 " : "w-full flex flex-col  "
                  } ${desktop && pathname === item.href&&"border-b-2 border-primary-500 rounded-lg"} py-3`}
                >
                  {" "}
                  <div
                    className={`${
                      pathname === item.href && "text-primary-500"
                    } flex items-center justify-start w-full h-full cursor-pointer z-20 hover:text-primary-500`}
                    onClick={() =>
                      setDropdown(dropdown === item.id ? "" : item.id)
                    }
                  >
                    {!desktop && pathname === item.href && (
                      <span className="absolute right-0 text-primary-500">
                        <Indicator width={18} height={81} />
                      </span>
                    )}{" "}
                    <div className="flex items-center justify-start">
                      <span className={`${desktop ? "hidden" : "pl-2"}`}>
                        {item.icone}
                      </span>
                      <h2>{item.label}</h2>
                    </div>
                    <span
                      className={`${
                        dropdown === item.id ? "" : "-rotate-90"
                      } mr-2 transition-all duration-200`}
                    >
                      <ArrowLeft width={23} height={23} />
                    </span>
                  </div>
                  <div
                    className={`${
                      dropdown === item.id
                        ? " overflow-auto  translate-y-5"
                        : " overflow-hidden h-0"
                    } ${
                      desktop
                        ? "absolute w-60 bg-default-100 shadow-lg  rounded-lg pt-0"
                        : "w-full"
                    }  transition-all ease-in-out duration-500  `}
                  >
                    {item.details.map((detail) => {
                      return (
                        <Link
                          onMouseEnter={() => setGotoPage(detail.id)}
                          onMouseLeave={() => setGotoPage(null)}
                          key={detail.id}
                          href={detail.href}
                          className={`${
                            pathname === detail.href && "text-primary-500"
                          } flex justify-between items-center pt-2  pb-4 px-3 text-default-500 w-full hover:text-primary-500`}
                        >
                          <div className="flex justify-between items-center ">
                            <span className={`pl-2`}>{detail.icone}</span>
                            <p className="">{detail.label} </p>
                          </div>
                          {goToPage === detail.id && (
                            <FaArrowLeft className="animate-arrow-left h-3 w-3 text-primary-500" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Meno;
