import React from "react";

function AuthenticationSteps({authenticationSteps,step}) {
  return (
    <>
      {authenticationSteps.map((value) => {
        return (
          <React.Fragment key={value.id}>
            <div
              key={value.id}
              className=" relative px-2 w-auto flex flex-col items-center "
            >
              <span
                className={`${
                  step >= value.count ? "bg-primary-500 " : " bg-default-300 "
                } text-white  w-8 h-8   text-sm text-center flex items-center justify-center  rounded-full `}
              >
                {value.count.toLocaleString("fa")}
              </span>
              <p
                className={`absolute  bottom-0 whitespace-nowrap translate-y-6 ${
                  step >= value.count
                    ? "text-primary-500"
                    : "text-default-400 "
                } text-[.6rem]`}
              >
                {value.label}
              </p>
            </div>
            {value.id !== 3 && (
              <span
                className={`border-1 rounded-full ${
                  step >= value.count + 1
                    ? "border-primary-500 border"
                    : "border-default-500 border-dashed"
                } w-full`}
              ></span>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default AuthenticationSteps;
