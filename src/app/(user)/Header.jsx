"use client";

import { ThemeSwitcher } from "@/common/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Cart,
  Heart,
  IconeBrand,
  Meno,
  UserScan,
  User,
} from "@/common/icons/Icons";
import userImg from "/public/user.jpg";
import Drawer from "@/components/Header/Drawer ";
import MenoDesktop from "@/components/Header/Meno";
import iconeBrand from "/public/iconeBrand.svg";
import { Button, Progress } from "@nextui-org/react";
import { PiSignInBold } from "react-icons/pi";
import { useMutation } from "@tanstack/react-query";
import { getUserProfile } from "@/services/authService";
import { useGetUser } from "@/hooks/useAuth";

function Header() {
  const { data: user, error, isPending } = useGetUser();
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (isShowDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowDrawer]);

  useEffect(() => {
    if (isPending) {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 10));
      }, 400);
      return () => clearInterval(interval);
    }

  }, [isPending]);
  return (
    <header className={` w-full sticky top-0 z-10`}>
      {isPending && (
        <Progress
          size="sm"
          aria-label="Loading..."
          value={value}
          className="w-full absolute top-0"
        />
      )}
      <div className=" 2xl:container  z-20 w-full h-full   relative ">
        <Drawer
          isShowDrawer={isShowDrawer}
          setIsShowDrawer={setIsShowDrawer}
          user={user}
        />
        <div
          className={` backdrop-blur-md dark:backdrop-blur-none dark:bg-opacity-90 dark:bg-[#2D2E2F]  p-3 md:py-2  lg:py-1 z-20 w-full h-full   flex-row-center-between relative  xl:px-28 md:font-medium  ${
            isPending ? "blur-md opacity-70" : "blur-0 opacity-100"
          }`}
        >
          <div className="flex-row-center-center h-full w-auto">
            <button
              className="text-default-600 lg:hidden"
              onClick={() => setIsShowDrawer((v) => !v)}
            >
              <Meno height={34} width={34} />
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
                className="w-9 h-9 "
              />
              <div className="flex flex-col items-start  justify-center mx-3">
                <h1 className="hidden sm:flex text-2xl  text-primary-500  font-black ">
                  ترید هوم
                </h1>
                <p className="hidden sm:flex  text-[.7rem] text-bluePrimary-300 font-extralight">
                  سایت اموزش ترید
                </p>
              </div>
            </Link>
            <div className="hidden lg:block lg:mr-12">
              <MenoDesktop user={user} desktop />
            </div>
            <div className="hidden md:block  lg:hidden md:mr-6">
              <MenoDesktop user={user} taplet desktop />
            </div>
          </div>
          <div className="gap-x-3 xl:gap-x-4 flex-row-center-between text-secondary-700 ">
            <Link href="/cart" className="text-primary-500">
              <Cart height={32} width={32} />
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
                <Button
                  className="font-bold text-[1rem] "
                  size="md"
                  radius="lg"
                  color="primary"
                  variant="shadow"
                  startContent={<PiSignInBold className="w-5 h-5 rotate-180" />}
                >
                  ورود
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
