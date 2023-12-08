import OTPInput from "react-otp-input";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Edit } from "@/common/icons/Icons";
import LoadingButton from "@/common/LoadingButton";
import Loading from "@/common/Loading";
function CheckOTPForm({
  otpResponse,
  sendOtpHandler,
  otp,
  setOtp,
  setStep,
  time,
  onResendOtp,
  isPendingCheckOtp,
  isPending,
}) {
  return (
    <>
      {isPending ? (
       <span className="w-full h-full flex items-center justify-center mt-8"> <Loading /></span>
      ) : (
        <form
          className="w-full flex flex-col gap-y-6 px-4 "
          onSubmit={sendOtpHandler}
        >
          {otpResponse && (
            <p
              className="flex items-center justify-between  text-default-500 font-normal text-sm w-full"
            >
              {otpResponse?.message}
              <button onClick={() => setStep(1)} className="text-primary-500">
                <Edit width={28} height={28} />
              </button>
            </p>
          )}
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              width: "2.8rem",
              padding: "8px",
              border: "1px solid var(--color-zincSecondary-400) ",
              borderRadius: ".7rem",
              outlineColor: "var(--color-bluePrimary-500)",
            }}
            shouldAutoFocus
            containerStyle="flex flex-wrap items-center  flex-row-reverse gap-2  justify-center"
            renderInput={(props) => <input type="number" {...props} />}
          />
          <div className=" text-default-500 w-full text-sm text-center">
            {time > 0 ? (
              <p><span className="font-bold text-danger-500">{time}</span> ثانیه تا ارسال مجدد کد</p>
            ) : (
              <button type="button" onClick={onResendOtp}>
                دریافت مجدد کد تایید
              </button>
            )}
          </div>
          {isPendingCheckOtp ? (
             <span className=" shadow-lg shadow-bluePrimary-500 rounded-xl flex items-center justify-center w-full h-12  font-bold text-[1rem]  bg-bluePrimary-500 text-white">
             <LoadingButton width="43" heigh="43" />
           </span>
          ) : (
            <Button
              isDisabled={otp.length!==6}
              type="submit"
              variant="shadow"
              className="w-full h-12 font-bold text-[1rem]"
              color="primary"
            >
              بررسی کد
            </Button>
          )}
        </form>
      )}
    </>
  );
}
export default CheckOTPForm;
