import { ThreeDots } from "react-loader-spinner";

function LoadingButton({ width = "75", heigh = "40" }) {
  return (
    <ThreeDots
      height={heigh}
      width={width}
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}
export default LoadingButton;