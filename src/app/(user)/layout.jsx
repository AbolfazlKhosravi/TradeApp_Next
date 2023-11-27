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
      <body className={`${iranyekanFont.variable} font-sans `}>
        <Providers>
          <main className="min-h-screen flex flex-col">
            <Header />
            <div className="container w-full flex-1">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
