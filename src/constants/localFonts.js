import LocalFont from "next/font/local";
const iranyekanFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanWebRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanWebMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanWebBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanWebExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanWebBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  style: "normal",
  display: "block",
});

export default iranyekanFont;
