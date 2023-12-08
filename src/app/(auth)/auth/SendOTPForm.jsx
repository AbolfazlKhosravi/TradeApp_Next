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
import LoadingButton from "@/common/LoadingButton";
import { Input } from "@nextui-org/react";
const phoneCountryCodes = [
  { value: "98", label: "IR" },
  { value: "1", label: "USA" },
  { value: "90", label: "TR" },
  { value: "33", label: "FR" },
];
function SendOTPForm({
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSelectAc,
  Ac,
  sendPhoneNumberOrEmailHandler,
  isPending,
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
      <form
        onSubmit={sendPhoneNumberOrEmailHandler}
        className="w-full flex flex-col gap-y-6 px-4"
      >
        {selected === "phoneNumber" ? (
          <>
            <div className="w-full  flex items-start justify-between gap-x-3">
              {" "}
              <Input
                variant={"bordered"}
                className={`h-12 w-3/4 `}
                type="tel"
                label="شماره موبایل"
                dir="ltr"
                isRequired
                value={phoneNumber}
                onValueChange={setPhoneNumber}
                endContent={
                  <div
                    dir="ltr"
                    className="pointer-events-none flex items-end border-r-1  border-default-500 h-full  pr-2 mr-2"
                  >
                    <span className="text-default-400 text-small">+{Ac}</span>
                  </div>
                }
              />
              <Select
                size="sm"
                isRequired
                variant="bordered"
                dir="ltr"
                label="AC"
                defaultSelectedKeys={["98"]}
                className=" w-1/4"
                value={Ac}
                onChange={handleSelectAc}
              >
                {phoneCountryCodes.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            {isPending ? (
              <span className="shadow shadow-bluePrimary-500 rounded-xl flex items-center justify-center w-full h-12  font-bold text-[1rem]  bg-bluePrimary-500 text-white">
                <LoadingButton width="43" heigh="43" />
              </span>
            ) : (
              <Button
                isDisabled={phoneNumber === "" || Ac === ""}
                type="submit"
                variant="shadow"
                className="w-full h-12 font-bold text-[1rem]"
                color="primary"
              >
                ارسال کد
              </Button>
            )}
          </>
        ) : (
          <>
            <Input
              dir="ltr"
              variant={"bordered"}
              className={`h-12 w-full `}
              type="email"
              label="ایمیل"
              isRequired
              value={email}
              onValueChange={setEmail}
            />
            {isPending ? (
              <span className=" shadow-lg shadow-bluePrimary-500 rounded-xl flex items-center justify-center w-full h-12  font-bold text-[1rem]  bg-bluePrimary-500 text-white">
                <LoadingButton width="43" heigh="43" />
              </span>
            ) : (
              <Button
                isDisabled={email === ""}
                type="submit"
                variant="shadow"
                className="w-full h-12 font-bold text-[1rem]"
                color="primary"
              >
                ارسال کد
              </Button>
            )}
          </>
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
