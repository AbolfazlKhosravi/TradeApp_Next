import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import userImg from "/public/userImg.jpg";
import { PiUserCircleThin, PiUserCirclePlusLight } from "react-icons/pi";
import { Button, Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Camera } from "@/common/icons/Icons";
import LoadingButton from "@/common/LoadingButton";

function CompletedUserProfile({
  avatar,
  setAvatar,
  profileUser,
  profileUserHandler,
  senProfileHandler,
  isPendingSendProfile,
}) {
  const router = useRouter();
  return (
    <>
      {" "}
      <form
        onSubmit={senProfileHandler}
        className="w-full flex flex-col md:flex-row md:px-0 gap-y-6 px-4 md:gap-x-8 "
      >
        <div className="md:order-last relative flex justify-center items-center bg-default-100 dark:bgColor  p-3 md:p-4  rounded-3xl  w-full  ">
          {avatar && (
            <label
              className="z-50 absolute bottom-[.6rem] translate-x-8 p-1 border cursor-pointer border-primary-700 rounded-2xl flex whitespace-nowrap items-center justify-center text-primary-500"
              htmlFor="avatar"
            >
              <Camera width={25} height={25} />
            </label>
          )}
          <input
            onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.size > 204857) {
                toast.error("حجم عکس زیاد است");
                return;
              }

              setAvatar(file);
            }}
            accept="image/png, image/jpeg"
            dir="ltr"
            className=" hidden"
            id="avatar"
            type="file"
          />
          {avatar ? (
            <Image
              priority
              width={100}
              height={100}
              className="w-20 h-20 object-cover rounded-full ring-2 ring-primary-700 p-[.1rem]"
              src={URL.createObjectURL(avatar)}
              alt="userImage"
            />
          ) : (
            <label
              htmlFor="avatar"
              className=" relative border text-4xl border-default-300 w-20 h-20 backdrop-blur-lg rounded-full flex items-center justify-center text-primary-500"
            >
              <p className=" translate-y-1">؟</p>
              <label
                className="z-50 absolute bottom-0  translate-x-8 p-1 border cursor-pointer border-default-300 rounded-2xl flex whitespace-nowrap items-center justify-center text-primary-500"
                htmlFor="avatar"
              >
                <Camera width={25} height={25} />
              </label>
            </label>
          )}
        </div>
        <div className="w-full flex flex-col md:items-center gap-y-6  ">
          <div className="flex flex-col  gap-y-6 w-full ">
            <Input
              label="نام و نام خانوادگی"
              name="name"
              value={profileUser.name}
              onChange={profileUserHandler}
              dir="rtl"
              variant={"bordered"}
              className={`h-12 w-full `}
              isRequired
            />
            <Input
              label="ایمیل"
              name="email"
              value={profileUser.email}
              onChange={profileUserHandler}
              dir="ltr"
              type="email"
              variant={"bordered"}
              className={`h-12 w-full `}
            />
          </div>
          <div className="grid grid-cols-3 gap-x-4 ">
            {isPendingSendProfile ? (
              <span className=" shadow-lg shadow-bluePrimary-500 rounded-xl flex items-center justify-center w-full col-span-2 h-12  font-bold text-[1rem]  bg-bluePrimary-500 text-white">
                <LoadingButton width="43" heigh="43" />
              </span>
            ) : (
              <Button
                type="submit"
                variant="shadow"
                className="w-full h-12 font-bold text-[1rem] col-span-2"
                color="primary"
              >
                تکمیل اطلاعات
              </Button>
            )}
            <Button
              type="button"
              onClick={() => router.push("/")}
              variant="shadow"
              className="w-full h-12 dark:bgColor font-bold text-[1rem] col-span-1 text-default-600"
              color="default"
            >
              بعدا
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CompletedUserProfile;
