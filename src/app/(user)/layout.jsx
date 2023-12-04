import iranyekanFont from "@/constants/localFonts";
import "../globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Providers from "../Providers";

export const metadata = {
  title: "ترید هوم",
  description: "خدمات در حوزه ترید و محصولات  ترید",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" dir="rtl">
      <body
        className={`${iranyekanFont.variable} -z-50  font-sans bg-foreground-50 dark:bg-[#04080F]`}
      >
        <Providers>
          <main className="min-h-screen flex flex-col z-0 ">
            <Header />
            <div className="container w-full h-full flex-1 xl:px-40 ">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
