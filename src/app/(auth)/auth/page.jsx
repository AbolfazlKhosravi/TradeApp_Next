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
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOTP, completeProfile, getOTP } from "@/services/authService";
import { useRouter } from "next/navigation";

const authenticationSteps = [
  { count: 1, label: "شماره موبایل", id: 1 },
  { count: 2, label: "کد احراز هویت", id: 2 },
  { count: 3, label: "تکمیل اطلاعات", id: 3 },
];
const RESEND_TIME = 90;

function Auth() {
  const [step, setStep] = useState(3);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOpt] = useState("");
  const [avatar, setAvatar] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const [profileUser, setProfileUser] = useState({ name: "", email: "" });
  const [Ac, setAc] = useState("98");
  const router = useRouter();
  const {
    data: otpResponse,
    isPending,
    mutateAsync: mutateGetOtp,
  } = useMutation({ mutationFn: getOTP });
  const { isPending: isPendingCheckOtp, mutateAsync: mutateCheckingOtp } =
    useMutation({ mutationFn: checkOTP });
  const { isPending: isPendingSendProfile, mutateAsync: mutateSendProfile } =
    useMutation({ mutationFn: completeProfile });

  const handleSelectAc = (e) => {
    setAc(e.target.value);
  };
  const sendPhoneNumberOrEmailHandler = async (e) => {
    e.preventDefault();
    if (email.length !== 0) {
      return toast.error(
        " ارسال کد با ایمیل در دست توسعه هست لطفا  ایمیل خود را پاک کنید"
      );
    }
    try {
      const value = Ac + phoneNumber;
      const data = await mutateGetOtp({ phoneNumber: value });
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOpt("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      return toast.error("لطفا کامل بنویسید");
    }
    try {
      const value = Ac + phoneNumber;
      console.log(value);
      const data = await mutateCheckingOtp({ phoneNumber: value, otp });
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
            email={email}
            Ac={Ac}
            setPhoneNumber={setPhoneNumber}
            setEmail={setEmail}
            handleSelectAc={handleSelectAc}
            sendPhoneNumberOrEmailHandler={sendPhoneNumberOrEmailHandler}
            isPending={isPending}
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
            isPending={isPending}
            isPendingCheckOtp={isPendingCheckOtp}
            otpResponse={otpResponse}
            onResendOtp={sendPhoneNumberOrEmailHandler}
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
            isPendingSendProfile={isPendingSendProfile}
          />
        );

      default:
        return null;
    }
  };
  return (
    <main className=" flex  items-center   justify-center flex-col lg:flex-row lg:justify-between md:px-24 lg:px-0  w-full min-h-screen  relative   ">
      <div className="flex  flex-col items-center justify-start lg:w-1/2 lg:order-last ">
        <div className="flex items-center justify-between w-full lg:w-4/5  px-5 mb-1">
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
        <h2 className="hidden lg:block text-default-700 font-black text-2xl">
          یادگیری مهارت ترید
        </h2>
        <h3 className=" hidden lg:block text-default-600 font-extrabold text-sm my-5">
          {" "}
          هر کس باید ان را یاد بگیرد تا در زندگی خود پیشرفت کند !
        </h3>
        <h2 className="hidden lg:block text-primary-500 font-black text-lg  ">
          کافیست تا با ما باشید .
        </h2>
      </div>
      <div className="flex flex-col items-center gap-y-6 w-full lg:w-1/2 ">
        <div className="w-full relative flex items-center justify-center">
          <p className=" text-default-600  font-extrabold text-[1.25rem]">
            {step === 3 ? "تکمیل اطلاعات در سایت" : " ورود یا ثبت نام در سایت"}
          </p>
          <div className="translate-y-[.2rem] flex justify-between absolute right-3 ">
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
