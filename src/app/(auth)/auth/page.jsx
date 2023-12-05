"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imgTitle from "/public/imgTitle.svg";
import AuthenticationSteps from "@/common/AuthenticationSteps";
import { ThemeSwitcher } from "@/common/ThemeSwitcher/ThemeSwitcher";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { Back } from "@/common/icons/Icons";
import CompletedUserProfile from "./CompletedUserProfile";

const authenticationSteps = [
  { count: 1, label: "شماره موبایل", id: 1 },
  { count: 2, label: "کد احراز هویت", id: 2 },
  { count: 3, label: "تکمیل اطلاعات", id: 3 },
];
const RESEND_TIME = 90;

function Auth() {
  const [step, setStep] = useState(3);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOpt] = useState("");
  const [avatar, setAvatar] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const [profileUser, setProfileUser] = useState({ name: "", email: "" });
  const sendPhoneNumberHandler = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 11) {
      return toast.error("لطفا شماره موبایل را درست وارد کنید");
    }
    try {
      const data = await mutateGetOtp({ phoneNumber });
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOpt("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      return toast.error("لطفا کامل بنویسید");
    }
    try {
      const data = await mutateCheckingOtp({ phoneNumber, otp });
      toast.success(data.message);
      if (data.user.isActive) {
        router.push("/");
      } else {
        setStep(3);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const profileUserHandler = (e) => {
    setProfileUser({ ...profileUser, [e.target.name]: e.target.value });
  };
  const senProfileHandler = async (e) => {
    e.preventDefault();
    if (profileUser.name === "") {
      return toast.error("لطفا نام خود را وارد کنید ");
    }
    try {
      const dataUser = { ...profileUser };
      if (dataUser.email === "") {
        delete dataUser.email;
      }
      const data = await mutateSendProfile(dataUser);
      toast.success(data.message);
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer =
      step === 2 && time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time, step]);
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            sendPhoneNumberHandler={sendPhoneNumberHandler}
            isPending={""}
            isPendingCheckOtp={""}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otp={otp}
            setOtp={setOpt}
            setStep={setStep}
            time={time}
            sendOtpHandler={sendOtpHandler}
            isPendingCheckOtp={""}
            otpResponse={""}
            onResendOtp={sendPhoneNumberHandler}
          />
        );
        case 3:
          return (
            <CompletedUserProfile
              avatar={avatar}
              setAvatar={setAvatar}
              profileUser={profileUser}
              profileUserHandler={profileUserHandler}
              senProfileHandler={senProfileHandler}
              isPendingSendProfile={""}
            />
          );

      default:
        return null;
    }
  };
  return (
    <main className=" flex  items-center   justify-center flex-col   w-full min-h-screen  relative  ">
      <div className="flex  flex-col items-center justify-start">
        <div className="flex items-center justify-between w-full  px-5 mb-1">
          <AuthenticationSteps
            step={step}
            authenticationSteps={authenticationSteps}
          />
          <span className="mr-12">
            <ThemeSwitcher />
          </span>
        </div>
        <Image
          width={800}
          height={800}
          src={imgTitle}
          alt="وبسایت اموزش ترید و خدمات"
        />
        <h2 className="hidden lg:block text-secondary-800 font-extrabold text-2xl">
          یادگیری مهارت ترید
        </h2>
        <h3 className="hidden lg:block text-secondary-600 font-extrabold text-sm my-5">
          {" "}
          هر کس باید ان را یاد بگیرد تا در زندگی خود پیشرفت کند !
        </h3>
        <h2 className="hidden lg:block text-primary-900 font-extrabold text-sm  ">
          کافیست تا با ما باشید .
        </h2>
      </div>
      <div className="flex flex-col items-center gap-y-6 w-full ">
        <div className="w-full relative flex items-center justify-center">
          <p className=" text-default-600  font-extrabold text-[1.25rem]">
           {step===3?"تکمیل اطلاعات در سایت":" ورود یا ثبت نام در سایت"}
          </p>
          <div className="w-full flex justify-between absolute right-3 ">
            {step === 2 && (
              <button onClick={() => setStep(1)} className="text-default-500">
                <Back width={28} height={28} />
              </button>
            )}
          </div>
        </div>
        {renderSteps()}
      </div>
    </main>
  );
}

export default Auth;
