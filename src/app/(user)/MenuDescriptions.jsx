import ListDescriptions from "@/constants/ListDescriptions";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function MenuDescriptions() {
  return (
    <div className=" grid grid-cols-6  w-full px-5 gap-5 lg:gap-16 mt-4 ">
      {ListDescriptions.map((item) => {
        return (
          <Link key={item.id} href={item.href} className="col-span-2 sm:col-span-1 rounded-2xl overflow-hidden">
            <div className="w-full h-full ">
              <Tooltip
                placement="bottom"
                content={item.content}
                classNames={{
                  content: [
                    "py-1 px-3 text-white text-xs bg-default-600 dark:bg-default-50 w-full",
                  ],
                }}
              >
                <Button
                  radius="lg"
                  variant="flat"
                  className=" flex-1 w-full h-full text-white bg-primary-500  py-4 dark:button flex-col"
                >
                  <span className="">{item.icone}</span>
                  <p className="text-xs">{item.label}</p>
                </Button>
              </Tooltip>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuDescriptions;
