import OTPInput from "react-otp-input";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Loading from "@/common/Loading";
import { Edit } from "@/common/icons/Icons";
function CheckOTPForm({
  otpResponse,
  sendOtpHandler,
  otp,
  setOtp,
  setStep,
  time,
  onResendOtp,
  isPendingCheckOtp,
}) {
  return (
    <>
      <form
        className="w-full flex flex-col gap-y-6 px-4"
        onSubmit={sendOtpHandler}
      >
        {otpResponse && (
          <p className="flex items-center justify-between  text-default-500 font-normal text-sm w-full">
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
            border: "1px solid var(--color-zincSecondary-400)",
            borderRadius: ".7rem",
            outlineColor: "var(--color-bluePrimary-500)",
          }}
          shouldAutoFocus
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          renderInput={(props) => <input type="number" {...props} />}
        />
        <div className=" text-default-500 w-full text-sm text-center">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button type="button" onClick={onResendOtp}>
              دریافت مجدد کد تایید
            </button>
          )}
        </div>
        {isPendingCheckOtp ? (
          <span className="flex items-center justify-center h-[3.2rem] w-full my-6">
            <Loading />
          </span>
        ) : (
          <Button
            type="submit"
            variant="shadow"
            className="w-full h-12 font-bold text-[1rem]"
            color="primary"
          >
            بررسی کد
          </Button>
        )}
      </form>
    </>
  );
}
export default CheckOTPForm;
