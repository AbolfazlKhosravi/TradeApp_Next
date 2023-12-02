"use client";

import { ThemeSwitcher } from "@/common/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Cart, Heart, IconeBrand, Meno, UserScan } from "@/common/icons/Icons";
import userImg from "/public/user.jpg";
import Drawer from "@/components/Header/Drawer ";
import MenoDesktop from "@/components/Header/Meno";
import iconeBrand from "/public/iconeBrand.svg";
function Header() {
  const user = false;
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  useEffect(() => {
    if (isShowDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowDrawer]);
  return (
    <header className="w-full sticky top-0  z-10  backdrop-blur-lg">
      <div className=" 2xl:container  p-3 z-50 w-full h-full   flex-row-center-between relative  xl:px-28 lg:font-medium">
        <Drawer
          isShowDrawer={isShowDrawer}
          setIsShowDrawer={setIsShowDrawer}
          user={user}
        />
        <div className="flex-row-center-center h-full w-auto">
          <button
            className="text-default-600 lg:hidden"
            onClick={() => setIsShowDrawer((v) => !v)}
          >
            <Meno height={35} width={35} />
          </button>
          <Link
            href="/"
            alt="Go to Home"
            className="cursor-pointer flex-row-center-center mr-3 lg:mr-0"
          >
            <Image
              width={100}
              height={100}
              src={iconeBrand}
              alt="image icone"
              className="w-10 h-10 "
            />
            <div className="flex flex-col items-start  justify-center mx-3">
              <h1 className="hidden sm:flex text-2xl lg:text-2xl text-primary-500  font-black ">
                ترید هوم
              </h1>
              <p className="hidden sm:flex  text-[.7rem] text-bluePrimary-300 font-extralight">
                سایت اموزش ترید
              </p>
            </div>
          </Link>
          <div className="hidden lg:block lg:mr-12">
            <MenoDesktop desktop />
          </div>
        </div>
        <div className="gap-x-3 xl:gap-x-4 flex-row-center-between text-secondary-700 ">
          <Link href="/cart">
            <Cart height={30} width={30} />
          </Link>
          <ThemeSwitcher />
          {user && (
            <Link href="/profile" className="w-10 h-10 relative">
              <Image
                fill
                className=" rounded-full object-cover hover:scale-105 transition-all cursor-pointer"
                src={userImg}
                alt="userImg"
              />
            </Link>
          )}
          {!user && (
            <Link href="/auth">
              <button className="px-3 py-[.43rem] rounded-lg text-white bg-primary-500 font-medium flex items-center justify-normal">
                <span className="flex items-center justify-start gap-x-2">
                  <UserScan height={25} width={25} />
                  <p>ورود</p>
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
