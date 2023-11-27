"use client";

import { ThemeSwitcher } from "@/common/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Cart, Heart, IconeBrand, Meno, UserScan } from "@/common/icons/Icons";
import userImg from "/public/user.jpg";

function Header() {
  const user = false;
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  return (
    <header className="w-full sticky top-0  z-10  backdrop-blur-xl p-3">
      <div className="2xl:container  z-50 w-full h-full  flex-row-center-between relative">
        <div className="flex-row-center-center h-full">
          <button
            className="text-default-600"
            onClick={() => setIsShowDrawer((v) => !v)}
          >
            <Meno height={35} width={35} />
          </button>
          <Link
            href="/"
            alt="Go to Home"
            className="cursor-pointer flex-row-center-center gap-x-3 mr-2"
          >
            <IconeBrand width={40} height={40} />
            <div className="flex flex-col items-start  gap-y-[1px] ">
              <h1 className="hidden sm:flex text-xl xl:text-2xl text-primary-500  font-black ">
                ترید هوم
              </h1>
              <p className="hidden sm:flex text-sm text-default-700">
                سایت اموزش ترید
              </p>
            </div>
          </Link>
        </div>
        <div className="gap-x-3 xl:gap-x-4 flex-row-center-between text-secondary-700 ">
          {!user && (
            <Link href="/auth">
              <Button className="text-white bg-primary-500 font-medium">
                <UserScan height={25} width={25} />
                <p>ورود</p>
              </Button>
            </Link>
          )}
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
          <Link href="/favorits" className="hidden sm:flex">
            <Heart height={30} width={30} />{" "}
          </Link>
          <Link href="/cart">
            <Cart height={30} width={30} />
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
