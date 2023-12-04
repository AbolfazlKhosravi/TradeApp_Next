import Link from "next/link";
import imgTitle from "/public/imgTitle.svg";
import { TbDiscount } from "react-icons/tb";
import Image from "next/image";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import { Arrows, Users, UsersBold } from "@/common/icons/Icons";
import MenuDescriptions from "./MenuDescriptions";

const DescriptionSite = () => {
  return (
    <div className="flex flex-col items-center justify-start md:mt-8 lg:mt-0 ">
      <div className=" flex flex-col items-center justify-center  md:flex-row md:justify-between md:items-center md:pb-16">
        <div className="w-full h-auto md:w-3/5 md:order-last">
          <Image
            width={800}
            height={800}
            src={imgTitle}
            alt="وبسایت اموزش ترید و خدمات"
          />
        </div>
        <div className=" flex flex-col items-center justify-start md:w-2/5 2xl:w-2/6 md:items-start gap-y-6 mx-8 md:mx-4">
          <div className="flex items-center justify-start gap-x-2 font-medium">
            <span className="flex items-center justify-center gap-x-1 text-xs bg-red-500 rounded-xl py-[.15rem] px-2 text-white">
              <TbDiscount className=" w-5 h-5" />
              <p>جشنواره تخفیف</p>
            </span>
            <p className="text-primary-500 text-sm">به زودی 😍</p>
          </div>
          <div className="flex flex-col items-center lg:items-start  justify-start gap-y-4 pb-2   border-b   border-primary-50">
            <h1 className="text-default-900  text-2xl lg:text-3xl text-center md:text-start font-black  ">
              ترید را در کنار ما اصولی و آسان یاد بگیرید .
            </h1>
            <p className="leading-7 font-normal text-default-400 text-sm    text-center md:text-start lg:w-5/6">
              ما در این مسیر کنارتون هستیم تا ترید را اصولی یاد بگیرید و{" "}
              <span className="text-primary-500 font-bold">در سود باشید</span>
            </p>
          </div>
          <div className=" relative flex  flex-col items-center justify-center  w-full">
            {" "}
            <div className=" flex flex-wrap gap-4 items-start justify-center md:justify-start w-full">
              <Link href="/auth">
                <Button
                  className="font-normal  "
                  radius="full"
                  color="primary"
                  variant="shadow"
                  startContent={<Users height={20} width={20} />}
                >
                  پیوستن به ما
                </Button>
              </Link>
              <div
                dir="ltr"
                className="flex  gap-y-4 flex-col items-center justify-start"
              >
                <AvatarGroup>
                  <Avatar
                    className="w-1"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <Avatar
                    className="w-1"
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  />
                  <Avatar
                    className="w-1"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                  <Avatar
                    className="w-1"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                </AvatarGroup>
                <div
                  dir="rtl"
                  className="flex  gap-x-1 items-center text-primary-500"
                >
                  <span className="-translate-y-[.1rem]"><UsersBold width={15} height={15} /></span>
                  <div className=" flex items-center text-xs">
                    <span className="font-black ml-1">
                      {(7.5).toLocaleString("fa")}{"  "}
                    </span>
                    <p className="text-default-500"> هزار همراه</p>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-default-500 my-3 md:absolute md:bottom-0 md:left-0 md:translate-y-16 md:-translate-x-8 lg:hidden">
              <Arrows width={30} height={60} />
            </span>
            <span className="hidden text-default-500 my-3 md:absolute md:bottom-0 md:left-0 md:translate-y-16 md:-translate-x-8 lg:block">
              <Arrows width={30} height={65} />
            </span>
          </div>
        </div>
      </div>

      <MenuDescriptions />
    </div>
  );
};

export default DescriptionSite;
