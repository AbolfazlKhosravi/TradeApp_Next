"use client";
import React, { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import Meno from "./Meno";
import { Close, IconeBrand, UserScan } from "@/common/icons/Icons";
import { Button } from "@nextui-org/react";
import userImg from "/public/user.jpg";
import Image from "next/image";

function Drawer({ setIsShowDrawer, isShowDrawer, user }) {
  const removeDropShot = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsShowDrawer(false);
        document.body.style.overflow = "auto";
        removeDropShot.current.style.display = "none";
      } else {
        removeDropShot.current.style.display = "block";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsShowDrawer]);

  return (
    <div
      ref={removeDropShot}
      className={`${
        isShowDrawer ? "w-full" : "w-0"
      } absolute   top-0 right-0   h-screen z-30 transition-all duration-200 overflow-hidden`}
    >
      <div
        onClick={() => setIsShowDrawer(false)}
        className={`absolute bg-zincSecondary-900 opacity-60 h-full w-full  -z-10  top-0 right-0`}
      ></div>
      <div
        className={`flex flex-col items-start justify-between max-h-screen min-h-screen w-[17.5rem] sm:w-[20rem]  overflow-y-auto z-50 bg-foreground-100 pb-6`}
      >
        <div className="w-full flex flex-col items-start">
          <div className="flex-row-center-between w-full border-b-1 border-default-300 pt-6 px-8 pb-3">
            <Link href="/" className="flex items-center justify-between ">
              <IconeBrand width={36} height={36} />
              <div className="flex flex-col items-start  justify-center mx-3">
                <h1 className=" text-xl text-primary-500 font-extrabold ">
                  {" "}
                  ترید هوم
                </h1>
                <p className="  text-[.55rem] text-bluePrimary-300 font-extralight">
                  سایت اموزش ترید
                </p>
              </div>
            </Link>
            <button
              className="text-default-500"
              onClick={() => setIsShowDrawer(false)}
            >
              <Close width={25} height={25} />
            </button>
          </div>
          <Meno />
        </div>
        {!user && (
          <Link href="/auth" className="w-full px-7 mt-7">
            <Button className="flex items-center justify-center text-white bg-primary-500 font-medium w-full h-12 rounded-2xl text-lg shadow-sm shadow-primary-500">
              <UserScan height={30} width={30} />
              <p>ورود</p>
            </Button>
          </Link>
        )}
        {user && (
          <Link
            href="/profile"
            className="w-full px-7 flex items-center justify-start gap-x-2 mt-7"
          >
            <Image
              width={100}
              height={100}
              className=" w-12 h-12 rounded-full object-cover hover:scale-105 transition-all cursor-pointer"
              src={userImg}
              alt="userImg"
            />
            <span className="flex flex-col items-start gap-y-1">
              <p className="text-sm font-bold text-default-600">
                ابوالفضل خسروی
              </p>
              <p className="text-xs font-normal text-zincSecondary-500">
                برنامه نویس
              </p>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Drawer;
