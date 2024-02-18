"use client";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import iconeBrand from "/public/iconeBrand.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full relative bg-foreground-100 dark:bgColor mt-8">
      <div className=" 2xl:container    p-3 md:py-2  lg:py-1 z-20   flex-row-center-between   xl:px-28 md:font-medium w-full h-full   relative ">
        <div className=" flex flex-col w-full ">
       
          <div className="flex items-start justify-between mt-8 px-4 md:px-6 ">
            <div className="flex justify-between items-start w-[14rem] md:w-1/2  xl:w-1/4">
              <div className="flex flex-col">
                <h3 className="text-2xl text-blue-600">خدمات</h3>
                <div className="mt-5 flex flex-col items-start justify-between">
                  <Link
                    href="/store"
                    className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer"
                  >
                    فروشگاه
                  </Link>
                  <Link
                    href="/courses"
                    className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer"
                  >
                    اموزش ها
                  </Link>
                  <Link
                    href="/market"
                    className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer"
                  >
                    مارکت
                  </Link>

                  <Link
                    href="/dilyAnalysis"
                    className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer"
                  >
                    تحلیل روزانه
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-md text-blue-600 mt-1 ">درباره ما</h3>
                <div className="mt-[1.4rem] flex flex-col items-start justify-between">
                  <Link
                    href="/sign-up"
                    className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer"
                  >
                     نام
                  </Link>
                  <Link
                    href="/login"
                    className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer"
                  >
                    ورود
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex md:gap-x-12">
              <a href="# ">
                <FaTwitter className="text-3xl hover:scale-105 transition-all mb-4 text-blue-500" />
              </a>
              <a
                href="https://github.com/AbolfazlKhosravi"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl hover:scale-105 transition-all mb-4 text-slate-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/abolfazl-khosravi-a17097268/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl hover:scale-105 transition-all mb-4 text-blue-500" />
              </a>

              <a href="# ">
                <FaYoutube className="text-3xl hover:scale-105 transition-all mb-4 text-red-500" />
              </a>
            </div>
          </div>
          <p className="text-[.7rem] opacity-30 px-3 md:px-4 py-3 dark:text-white">
            AKH 0.0.1
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
