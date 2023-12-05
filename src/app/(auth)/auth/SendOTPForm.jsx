import Link from "next/link";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import Loading from "@/common/Loading";
import { Input } from "@nextui-org/react";
const phoneCountryCodes = [
  { id: 1, value: "+98", label: "IR" },
  { id: 2, value: "+1", label: "USA" },
  { id: 3, value: "+98", label: "TR" },
  { id: 4, value: "+۳۳", label: "FR" },
  { id: 5, value: "+1", label: "CA" },
];
function SendOTPForm({
  phoneNumber,
  onChange,
  sendPhoneNumberHandler,
  isPending,
  isPendingCheckOtp
}) {
  const [selected, setSelected] = useState("phoneNumber");
  return (
    <>
      <div className="w-full items-center justify-center flex ">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          classNames={{
            cursor: "bg-primary-500 ",
            tabContent: "group-data-[selected=true]:text-white",
            tab: " h-9 ",
          }}
        >
          <Tab
            key="phoneNumber"
            title={
              <div className="flex items-center justify-center  w-28">
                <span className="font-bold">شماره موبایل</span>
              </div>
            }
          ></Tab>
          <Tab
            key="email"
            title={
              <div className="flex items-center justify-center  w-28">
                <span className="font-bold"> ایمیل</span>
              </div>
            }
          ></Tab>
        </Tabs>
      </div>
      <form className="w-full flex flex-col gap-y-6 px-4">
        {selected === "phoneNumber" ? (
          <div className="w-full  flex items-start justify-between gap-x-3">
            {" "}
            <Input
              variant={"bordered"}
              className={`h-12 w-3/4 `}
              type="tel"
              label="شماره موبایل"
            />
            <Select
              size="sm"
              isRequired
              variant="bordered"
              dir="ltr"
              label="AC"
              className=" w-1/4"
            >
              {phoneCountryCodes.map((item) => (
                <SelectItem key={item.id} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        ) : (
          <Input
            dir="ltr"
            variant={"bordered"}
            className={`h-12 w-full `}
            type="email"
            label="ایمیل"
            isRequired
          />
        )}
        {isPendingCheckOtp ? (
          <span className="flex items-center justify-centerw-full h-12">
            <Loading />
          </span>
        ) : (
          <Button
            type="submit"
            variant="shadow"
            className="w-full h-12 font-bold text-[1rem]"
            color="primary"
          >
            ارسال کد
          </Button>
        )}
      </form>
      <p className="text-default-900 font-bold text-[.62rem] ">
        ورود شما به معنای قبول شرایط{" "}
        <Link className="text-primary-500 font-bold" href="#">
          ترید هوم
        </Link>{" "}
        و{" "}
        <Link className="text-primary-500 font-bold" href="#">
          قوانین حریم خصوصی
        </Link>{" "}
        است .
      </p>
    </>
  );
}

export default SendOTPForm;
